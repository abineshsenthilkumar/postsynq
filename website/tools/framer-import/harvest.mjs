// Some Framer code components (Phosphor icons, etc.) render only in the
// browser: the server HTML has an empty <div style="display:contents"> in
// their "-container". This loads the published page at each breakpoint and
// records what those containers hold after hydration, so convert.mjs can bake
// the markup in as static JSX.
//
// Usage: node tools/framer-import/harvest.mjs [pages=home,about,...]
// Output: tools/framer-import/source/<page>.runtime.json
//   { "<container class>": { "desktop": [html, ...], "tablet": [...], "phone": [...] } }
import { chromium } from "playwright-core"
import fs from "node:fs"
import path from "node:path"

const SRC = path.resolve("tools/framer-import/source")
const BASE = "https://postsynqq.framer.website"
const ROUTES = { home: "/", about: "/about", feature: "/feature", pricing: "/pricing", contact: "/contact", solutions: "/solutions", privacy: "/privacy", notfound: "/404" }
const BPS = { desktop: [1440, 900], tablet: [1000, 900], phone: [390, 844] }
const pages = (process.argv[2] || Object.keys(ROUTES).join(",")).split(",")

const browser = await chromium.launch({ channel: "msedge" })
for (const p of pages) {
  const ssr = fs.readFileSync(path.join(SRC, `${p}.html`), "utf8")
  const classes = [...new Set([...ssr.matchAll(/<div class="(framer-[\w-]+-container)"[^>]*>(?:<!--\$-->)?<div style="display:contents"><\/div>/g)].map(m => m[1]))]
  const out = {}
  for (const [bp, [w, h]] of Object.entries(BPS)) {
    const page = await browser.newPage({ viewport: { width: w, height: h } })
    await page.goto(BASE + ROUTES[p], { waitUntil: "networkidle", timeout: 120000 })
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)) }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(1500)
    const got = await page.evaluate(classes => {
      const r = {}
      for (const c of classes) r[c] = [...document.getElementsByClassName(c)].map(el => el.innerHTML)
      return r
    }, classes)
    for (const [c, list] of Object.entries(got)) (out[c] ??= {})[bp] = list
    await page.close()
  }
  fs.writeFileSync(path.join(SRC, `${p}.runtime.json`), JSON.stringify(out, null, 1))
  const filled = Object.values(out).filter(v => Object.values(v).some(l => l.some(s => s.trim()))).length
  console.log(`${p}: ${classes.length} runtime containers, ${filled} captured`)
}
await browser.close()
