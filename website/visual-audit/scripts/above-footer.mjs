// Confirms a footer change left everything above the footer untouched: compares
// full-page captures taken before (visual-audit/footer/before-pages) and after
// (visual-audit/localhost, from capture.mjs) over the area above the footer.
// Usage: node visual-audit/scripts/above-footer.mjs   (site on :3000, after capture.mjs)
import { chromium } from "playwright-core"
import { PNG } from "pngjs"
import pixelmatch from "pixelmatch"
import fs from "node:fs"
import path from "node:path"

const LOC = process.env.LOCAL_URL || "http://localhost:3000"
const ROUTES = { home: "/", about: "/about", feature: "/feature", pricing: "/pricing", contact: "/contact", solutions: "/solutions", privacy: "/privacy" }
const before = path.resolve("visual-audit/footer/before-pages"), after = path.resolve("visual-audit/localhost")
const out = path.resolve("visual-audit/footer/comparison/above-footer")
const browser = await chromium.launch({ channel: "msedge" })
let worst = 100
for (const [key, route] of Object.entries(ROUTES)) {
  const row = []
  for (const file of fs.readdirSync(path.join(before, key)).sort()) {
    if (!fs.existsSync(path.join(after, key, file))) continue
    const [w, h] = file.replace(".png", "").split("x").map(Number)
    const page = await browser.newPage({ viewport: { width: w, height: h } })
    await page.goto(LOC + route, { waitUntil: "networkidle" })
    const top = await page.evaluate(() => {
      const f = [...document.querySelectorAll("[data-framer-name='Footer']")].find(e => e.getClientRects().length)
      return Math.floor(f.getBoundingClientRect().top + scrollY)
    })
    await page.close()
    const A = PNG.sync.read(fs.readFileSync(path.join(before, key, file))), B = PNG.sync.read(fs.readFileSync(path.join(after, key, file)))
    const cw = Math.min(A.width, B.width), ch = Math.min(top, A.height, B.height)
    const crop = img => { const o = new PNG({ width: cw, height: ch }); PNG.bitblt(img, o, 0, 0, cw, ch, 0, 0); return o }
    const d = new PNG({ width: cw, height: ch })
    const n = pixelmatch(crop(A).data, crop(B).data, d.data, cw, ch, { threshold: 0.1 })
    const sim = +(100 * (1 - n / (cw * ch))).toFixed(2)
    worst = Math.min(worst, sim)
    if (n) { fs.mkdirSync(path.join(out, key), { recursive: true }); fs.writeFileSync(path.join(out, key, file), PNG.sync.write(d)) }
    row.push(`${file.replace(".png", "")} ${sim}% (${n}px of ${ch}px-tall area)`)
  }
  console.log(`${key.padEnd(10)} ${row.join(" | ")}`)
}
await browser.close()
console.log(`\nlowest similarity above the footer: ${worst}%`)
