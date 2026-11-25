// Compares the Home "Scroll Reveal Paragraph" colouring with the reference at
// matched scroll positions: counts fully dark and partially dark characters.
import { chromium } from "playwright-core"
const b = await chromium.launch({ channel: "msedge" })
const state = (sel) => () => {
  const el = [...document.querySelectorAll("[data-framer-name='Scroll Reveal Paragraph'] p")].find(e => e.getClientRects().length)
  const sp = [...el.querySelectorAll("span[aria-hidden] span span")]
  // Chrome reports color-mix() results as color(srgb r g b) on a 0..1 scale.
  const parse = c => { const m = c.match(/[\d.]+/g).map(Number); return c.startsWith("color(") ? m.map(v => v * 255) : m }
  let full = 0, part = 0
  for (const s of sp) { const [r] = parse(getComputedStyle(s).color); if (r <= 40) full++; else if (r < 190) part++ }
  return { full, part, n: sp.length, top: el.getBoundingClientRect().top / innerHeight }
}
let worst = 0, rows = 0
for (const [w, h] of [[1440, 900], [1000, 900], [390, 844]]) {
  const pages = {}
  for (const [k, base] of [["ref", "https://postsynqq.framer.website"], ["loc", "http://localhost:3000"]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } }); await p.goto(base + "/", { waitUntil: "networkidle" }); await p.waitForTimeout(800); pages[k] = p
  }
  const top = await pages.ref.evaluate(() => [...document.querySelectorAll("[data-framer-name='Scroll Reveal Paragraph'] p")].find(e => e.getClientRects().length).getBoundingClientRect().top + scrollY)
  const line = []
  for (let frac = 0.9; frac >= -0.1; frac -= 0.1) {
    const r = {}
    for (const k of ["ref", "loc"]) { await pages[k].evaluate(y => scrollTo(0, y), Math.round(top - frac * h)); await pages[k].waitForTimeout(400); r[k] = await pages[k].evaluate(state()) }
    const diff = Math.abs(r.ref.full - r.loc.full); worst = Math.max(worst, diff); rows++
    line.push(`${frac.toFixed(1)}: ref ${r.ref.full}+${r.ref.part} / loc ${r.loc.full}+${r.loc.part}`)
  }
  console.log(`${w}x${h}  (top as fraction of viewport: fully-dark+partial chars)\n  ` + line.join("\n  "))
  for (const p of Object.values(pages)) await p.close()
}
await b.close()
console.log(`\n${worst <= 3 ? "PASS" : "FAIL"}  scroll-reveal matches reference within ${worst} characters at all ${rows} sampled positions`)
