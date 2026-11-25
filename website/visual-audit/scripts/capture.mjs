// Full-page screenshots of reference (Framer) and localhost, plus a pixel diff.
// Usage: node visual-audit/scripts/capture.mjs [pages=home,about] [sizes=1440x900]
//   pages: home,about,feature,pricing,contact,solutions
import { chromium } from "playwright-core"
import { PNG } from "pngjs"
import pixelmatch from "pixelmatch"
import fs from "node:fs"
import path from "node:path"

const REF = "https://postsynqq.framer.website"
const LOC = process.env.LOCAL_URL || "http://localhost:3000"
const ROUTES = { home: "/", about: "/about", feature: "/feature", pricing: "/pricing", contact: "/contact", solutions: "/solutions", privacy: "/privacy", notfound: "/this-page-does-not-exist" }
const pages = (process.argv[2] || "home").split(",")
const sizes = (process.argv[3] || "1440x900").split(",").map(s => s.split("x").map(Number))
const root = path.resolve("visual-audit")

// Hide things that are not part of the design: Framer badge/editor bar, Next dev indicator.
const HIDE = `
  #__framer-badge-container, .__framer-badge, [data-framer-name="Badge"], #__framer-editorbar,
  nextjs-portal, [data-nextjs-toast], [data-next-badge-root] { display: none !important; }
  *, *::before, *::after { animation-play-state: paused !important; caret-color: transparent !important; }
`

async function settle(page) {
  await page.evaluate(() => document.fonts.ready)
  // Scroll through to trigger reveal animations and lazy images.
  await page.evaluate(async () => {
    const step = window.innerHeight / 2
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120))
    }
    window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 600))
  })
  // Lazy images: force-load and wait for every image so both sides are compared fully loaded.
  await page.evaluate(async () => {
    document.querySelectorAll("img[loading=lazy]").forEach(i => { i.loading = "eager" })
    await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; setTimeout(r, 15000) })))
  })
  await page.addStyleTag({ content: HIDE })
  await page.waitForTimeout(800)
}

async function shot(browser, url, file, [w, h]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  const errors = []
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()) })
  page.on("pageerror", e => errors.push(String(e)))
  const res = await page.goto(url, { waitUntil: "networkidle", timeout: 120000 })
  await settle(page)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  await page.screenshot({ path: file, fullPage: true })
  await page.close()
  return { status: res?.status(), overflow, errors }
}

function diff(a, b, out) {
  const A = PNG.sync.read(fs.readFileSync(a)), B = PNG.sync.read(fs.readFileSync(b))
  const w = Math.min(A.width, B.width), h = Math.min(A.height, B.height)
  const crop = (img) => { const o = new PNG({ width: w, height: h }); PNG.bitblt(img, o, 0, 0, w, h, 0, 0); return o }
  const ca = crop(A), cb = crop(B), d = new PNG({ width: w, height: h })
  const n = pixelmatch(ca.data, cb.data, d.data, w, h, { threshold: 0.1 })
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, PNG.sync.write(d))
  return { similarity: +(100 * (1 - n / (w * h))).toFixed(2), refH: A.height, locH: B.height }
}

const browser = await chromium.launch({ channel: "msedge" })
const report = []
for (const p of pages) for (const size of sizes) {
  const tag = `${size[0]}x${size[1]}`
  const ref = path.join(root, "reference", p, `${tag}.png`)
  const loc = path.join(root, "localhost", p, `${tag}.png`)
  const r = process.env.SKIP_REF && fs.existsSync(ref) ? { status: "cached" } : await shot(browser, REF + ROUTES[p], ref, size)
  const l = await shot(browser, LOC + ROUTES[p], loc, size)
  const row = { page: p, size: tag, refStatus: r.status, locStatus: l.status, locOverflowPx: l.overflow, locErrors: l.errors.slice(0, 5) }
  if (l.status === 200 || (p === "notfound" && l.status === 404)) Object.assign(row, diff(ref, loc, path.join(root, "comparison", p, `${tag}.png`)))
  report.push(row); console.log(JSON.stringify(row))
}
await browser.close()
fs.writeFileSync(path.join(root, "report.json"), JSON.stringify(report, null, 2))
