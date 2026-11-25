// Captures the hover variant of Framer components. Framer applies hover by
// adding class "hover" to the component root (layout rules live in its CSS),
// plus inline-style changes and hover-only layers applied by its runtime.
// For every component root that has ".hover" CSS rules, this records the
// root's outerHTML at rest and while hovered.
// Output: tools/framer-import/source/hover.json  { "<comp> <variant>": { rest, hover } }
// Usage: node tools/framer-import/harvest-hover.mjs
import { chromium } from "playwright-core"
import fs from "node:fs"
import path from "node:path"

const BASE = "https://postsynqq.framer.website"
const SRC = path.resolve("tools/framer-import/source")
const css = fs.readFileSync(path.resolve("app/_framer/framer.css"), "utf8")
// ".framer-GoepU.framer-v-gve0vi.hover" -> "framer-GoepU framer-v-gve0vi"
const sigs = [...new Set([...css.matchAll(/\.(framer-[\w]+)\.(framer-v-[\w]+)\.hover/g)].map(m => `${m[1]} ${m[2]}`))]
console.log(`${sigs.length} hoverable component variants in CSS`)

const out = {}
const browser = await chromium.launch({ channel: "msedge" })
for (const route of ["/", "/about", "/feature", "/pricing", "/contact", "/solutions", "/privacy"]) {
  const todo = sigs.filter(s => !out[s])
  if (!todo.length) break
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await p.goto(BASE + route, { waitUntil: "networkidle", timeout: 120000 })
  for (const sig of todo) {
    const [comp, variant] = sig.split(" ")
    const el = p.locator(`.${comp}.${variant}:visible`).first()
    if (!(await el.count())) continue
    try {
      await el.scrollIntoViewIfNeeded({ timeout: 5000 }); await p.mouse.move(0, 0); await p.waitForTimeout(500)
      const rest = await el.evaluate(e => e.outerHTML)
      await el.hover({ timeout: 5000 }); await p.waitForTimeout(1200)
      const hover = await el.evaluate(e => e.outerHTML)
      await p.mouse.move(0, 0); await p.waitForTimeout(300)
      if (/\bhover\b/.test(hover.slice(0, 400))) { out[sig] = { rest, hover, route }; console.log(`  ${sig} (${route})`) }
    } catch (e) { console.log(`  skip ${sig}: ${String(e).slice(0, 80)}`) }
  }
  await p.close()
}
await browser.close()
fs.writeFileSync(path.join(SRC, "hover.json"), JSON.stringify(out, null, 1))
console.log(`captured ${Object.keys(out).length}/${sigs.length}`)
