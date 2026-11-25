// Pixel-compares two capture folders (<dir>/<page>/<size>.png), e.g. localhost
// captures before and after a change that should not alter the look.
// Usage: node visual-audit/scripts/compare-dirs.mjs <beforeDir> <afterDir> [outDir]
import { PNG } from "pngjs"
import pixelmatch from "pixelmatch"
import fs from "node:fs"
import path from "node:path"

const [a, b, out = "visual-audit/comparison/before-after"] = process.argv.slice(2)
for (const page of fs.readdirSync(a).filter(d => fs.statSync(path.join(a, d)).isDirectory()).sort()) {
  const row = []
  for (const file of fs.readdirSync(path.join(a, page)).filter(f => /^\d+x\d+\.png$/.test(f)).sort()) {
    const pb = path.join(b, page, file); if (!fs.existsSync(pb)) continue
    const A = PNG.sync.read(fs.readFileSync(path.join(a, page, file))), B = PNG.sync.read(fs.readFileSync(pb))
    const w = Math.min(A.width, B.width), h = Math.min(A.height, B.height)
    const crop = img => { const o = new PNG({ width: w, height: h }); PNG.bitblt(img, o, 0, 0, w, h, 0, 0); return o }
    const d = new PNG({ width: w, height: h })
    const n = pixelmatch(crop(A).data, crop(B).data, d.data, w, h, { threshold: 0.1 })
    if (n) { fs.mkdirSync(path.join(out, page), { recursive: true }); fs.writeFileSync(path.join(out, page, file), PNG.sync.write(d)) }
    row.push(`${file.replace(".png", "")} ${n}px${A.height !== B.height ? ` (h ${A.height}->${B.height})` : ""}`)
  }
  console.log(`${page.padEnd(10)} ${row.join(" | ")}`)
}
