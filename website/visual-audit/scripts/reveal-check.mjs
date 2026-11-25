import { chromium } from "playwright-core"
const b = await chromium.launch({ channel: "msedge" })
for (const motion of ["no-preference", "reduce"]) for (const r of ["/", "/about", "/feature", "/pricing", "/contact", "/solutions", "/privacy"]) {
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: motion })
  const p = await ctx.newPage()
  await p.goto("http://localhost:3000" + r, { waitUntil: "networkidle" })
  const atLoad = await p.evaluate(() => { const els = [...document.querySelectorAll("[data-reveal]")].filter(e => e.getClientRects().length); return { total: els.length, hiddenInView: els.filter(e => e.getBoundingClientRect().top < innerHeight && +getComputedStyle(e).opacity < 0.5).length } })
  await p.waitForTimeout(1500)
  await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 300) { scrollTo(0, y); await new Promise(r => setTimeout(r, 50)) } })
  await p.waitForTimeout(1500)
  const after = await p.evaluate(() => [...document.querySelectorAll("[data-reveal]")].filter(e => e.getClientRects().length && +getComputedStyle(e).opacity < 0.99).length)
  console.log(`${motion.padEnd(13)} ${r.padEnd(10)} reveal elements=${atLoad.total} still hidden after scroll=${after}${motion === "reduce" ? ` hidden at load (reduced motion)=${atLoad.hiddenInView}` : ""}`)
  await ctx.close()
}
await b.close()
