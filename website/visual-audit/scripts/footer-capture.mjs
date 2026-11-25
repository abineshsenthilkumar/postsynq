// Footer-only screenshots for the footer sync.
// Usage: node visual-audit/scripts/footer-capture.mjs <reference|before|after> [pages=home] [sizes]
//   reference -> live Framer site, before/after -> localhost.
//   "after" also writes pixel diffs (reference vs after) to visual-audit/footer/comparison/.
// Output: visual-audit/footer/<mode>/<name>.png, where name is desktop/tablet/mobile
// for the home page and <page>-<name> for other pages.
import { chromium } from "playwright-core"
import { PNG } from "pngjs"
import pixelmatch from "pixelmatch"
import fs from "node:fs"
import path from "node:path"

const REF = "https://postsynqq.framer.website"
const LOC = process.env.LOCAL_URL || "http://localhost:3000"
const ROUTES = { home: "/", about: "/about", feature: "/feature", pricing: "/pricing", contact: "/contact", solutions: "/solutions", privacy: "/privacy", notfound: "/this-page-does-not-exist" }
const NAMED = { "1440x900": "desktop", "768x1024": "tablet", "390x844": "mobile" }
const mode = process.argv[2] || "after"
const pages = (process.argv[3] || "home").split(",")
const sizes = (process.argv[4] || "1440x900,768x1024,390x844").split(",")
const out = path.resolve("visual-audit/footer")
const HIDE = `
  #__framer-badge-container, .__framer-badge, [data-framer-name="Badge"], #__framer-editorbar,
  nextjs-portal, [data-nextjs-toast], [data-next-badge-root] { display: none !important; }
  *, *::before, *::after { animation-play-state: paused !important; caret-color: transparent !important; }
`

const browser = await chromium.launch({ channel: "msedge" })
const report = []
for (const p of pages) for (const size of sizes) {
  const [w, h] = size.split("x").map(Number)
  const name = (p === "home" ? "" : p + "-") + (NAMED[size] || size)
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  const errors = []
  page.on("pageerror", e => errors.push(String(e)))
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()) })
  await page.goto((mode === "reference" ? REF : LOC) + ROUTES[p], { waitUntil: "networkidle", timeout: 120000 })
  await page.evaluate(() => document.fonts.ready)
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight / 2) { scrollTo(0, y); await new Promise(r => setTimeout(r, 100)) }
    scrollTo(0, document.documentElement.scrollHeight); await new Promise(r => setTimeout(r, 1500))
    document.querySelectorAll("img[loading=lazy]").forEach(i => { i.loading = "eager" })
    await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; setTimeout(r, 15000) })))
  })
  await page.addStyleTag({ content: HIDE })
  // The fixed navbar would be painted over the footer in an element screenshot.
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("#main *")) {
      if (getComputedStyle(el).position === "fixed" && !el.closest("[data-framer-name='Footer']")) el.style.visibility = "hidden"
    }
  })
  await page.waitForTimeout(600)
  const footer = page.locator("[data-framer-name='Footer']:visible").last()
  const count = await page.locator("footer:visible").count()
  const file = path.join(out, mode, `${name}.png`)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  await footer.screenshot({ path: file })
  const box = await footer.boundingBox()
  const row = { page: p, size, file: path.relative(process.cwd(), file), height: Math.round(box.height), visibleFooterElements: count, errors: errors.slice(0, 3) }
  await page.close()
  if (mode === "after") {
    const ref = path.join(out, "reference", `${name}.png`)
    if (fs.existsSync(ref)) {
      const A = PNG.sync.read(fs.readFileSync(ref)), B = PNG.sync.read(fs.readFileSync(file))
      const cw = Math.min(A.width, B.width), ch = Math.min(A.height, B.height)
      const crop = img => { const o = new PNG({ width: cw, height: ch }); PNG.bitblt(img, o, 0, 0, cw, ch, 0, 0); return o }
      const d = new PNG({ width: cw, height: ch })
      const n = pixelmatch(crop(A).data, crop(B).data, d.data, cw, ch, { threshold: 0.1 })
      fs.mkdirSync(path.join(out, "comparison"), { recursive: true })
      fs.writeFileSync(path.join(out, "comparison", `${name}.png`), PNG.sync.write(d))
      Object.assign(row, { refHeight: A.height, similarity: +(100 * (1 - n / (cw * ch))).toFixed(2) })
    }
  }
  report.push(row); console.log(JSON.stringify(row))
}
await browser.close()
fs.writeFileSync(path.join(out, `${mode}.json`), JSON.stringify(report, null, 2))
