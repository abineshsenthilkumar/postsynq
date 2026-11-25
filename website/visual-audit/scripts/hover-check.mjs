import { chromium } from "playwright-core"
import { PNG } from "pngjs"
import pixelmatch from "pixelmatch"
import fs from "node:fs"
const b = await chromium.launch({ channel: "msedge" })
const targets = [["nav primary", "nav:visible a[href*='signup']"], ["nav login", "nav:visible a[href*='login']"], ["hero tag", "section a[href$='/'][data-border], section a[href='./'][data-border]"]]
const shots = {}
for (const [base, side] of [["https://postsynqq.framer.website", "ref"], [process.env.LOCAL_URL || "http://localhost:3000", "loc"]]) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } })
  await p.goto(base + "/", { waitUntil: "networkidle" }); await p.waitForTimeout(1500)
  for (const [name, sel] of targets) {
    const el = p.locator(sel).first()
    await el.hover(); await p.waitForTimeout(900)
    const box = await el.boundingBox()
    const file = `visual-audit/comparison/hover-${name.replace(/ /g, "-")}-${side}.png`
    await p.screenshot({ path: file, clip: { x: box.x - 4, y: box.y - 4, width: box.width + 8, height: box.height + 8 } })
    ;(shots[name] ??= {})[side] = file
    await p.mouse.move(0, 0); await p.waitForTimeout(500)
  }
  await p.close()
}
await b.close()
for (const [name, { ref, loc }] of Object.entries(shots)) {
  const A = PNG.sync.read(fs.readFileSync(ref)), B = PNG.sync.read(fs.readFileSync(loc))
  const w = Math.min(A.width, B.width), h = Math.min(A.height, B.height)
  const crop = i => { const o = new PNG({ width: w, height: h }); PNG.bitblt(i, o, 0, 0, w, h, 0, 0); return o }
  const n = pixelmatch(crop(A).data, crop(B).data, null, w, h, { threshold: 0.1 })
  console.log(`hover ${name}: ${(100 * (1 - n / (w * h))).toFixed(2)}% similar (${A.width}x${A.height} vs ${B.width}x${B.height})`)
}
