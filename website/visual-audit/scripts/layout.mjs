// Compares positions of named Framer layers (data-framer-name) between reference and localhost.
// Prints the first layers whose y/height diverge.  Usage: node visual-audit/scripts/layout.mjs <route> [w] [h]
import { chromium } from "playwright-core"

const [route = "/", w = "1440", h = "900"] = process.argv.slice(2)
async function grab(url) {
  const b = await chromium.launch({ channel: "msedge" }); const p = await b.newPage({ viewport: { width: +w, height: +h } })
  await p.goto(url, { waitUntil: "networkidle", timeout: 120000 })
  await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)) } scrollTo(0, 0) })
  await p.waitForTimeout(1500)
  const r = await p.evaluate(() => [...document.querySelectorAll("[data-framer-name]")].filter(e => e.getClientRects().length).map(e => {
    const r = e.getBoundingClientRect(); return { n: e.getAttribute("data-framer-name"), c: (e.getAttribute("class") || "").split(" ")[0], y: Math.round(r.y + scrollY), h: Math.round(r.height), x: Math.round(r.x), w: Math.round(r.width), t: (e.innerText || "").slice(0, 40).replace(/\n/g, " ") }
  }))
  await b.close(); return r
}
const ref = await grab((process.env.REF || "https://postsynqq.framer.website") + route)
const loc = await grab((process.env.LOCAL_URL || "http://localhost:3000") + route)
const key = e => e.c + "|" + e.n
const L = new Map(); for (const e of loc) { const k = key(e); if (!L.has(k)) L.set(k, []); L.get(k).push(e) }
const seen = {}
let shown = 0
for (const e of ref) {
  const k = key(e); const i = (seen[k] = (seen[k] ?? -1) + 1); const l = L.get(k)?.[i]
  if (!l) { if (shown++ < 40) console.log(`MISSING locally: ${e.n} ${e.c} y=${e.y} h=${e.h} "${e.t}"`); continue }
  if (Math.abs(l.h - e.h) > 1 || Math.abs(l.w - e.w) > 1 || Math.abs(l.x - e.x) > 1) if (shown++ < 40) console.log(`${e.n} ${e.c}: ref y=${e.y} h=${e.h} x=${e.x} w=${e.w} | loc y=${l.y} h=${l.h} x=${l.x} w=${l.w}  "${e.t}"`)
}
console.log(`ref layers ${ref.length}, local layers ${loc.length}`)
