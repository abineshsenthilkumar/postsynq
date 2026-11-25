// Side-by-side crop: reference | localhost | diff for a vertical band.
// Usage: node visual-audit/scripts/crop.mjs <page> <size> <y> <h> [out]
import { PNG } from "pngjs"
import fs from "node:fs"
import path from "node:path"

const [p, size, y0 = "0", hh = "900", outArg] = process.argv.slice(2)
const files = ["reference", "localhost", "comparison"].map(d => path.join("visual-audit", d, p, `${size}.png`)).filter(fs.existsSync)
const imgs = files.map(f => PNG.sync.read(fs.readFileSync(f)))
const y = +y0, h = Math.min(+hh, ...imgs.map(i => i.height - y))
const W = imgs.reduce((s, i) => s + i.width, 0) + 10 * (imgs.length - 1)
const out = new PNG({ width: W, height: h }); out.data.fill(255)
let x = 0
for (const i of imgs) { PNG.bitblt(i, out, 0, y, i.width, h, x, 0); x += i.width + 10 }
const file = outArg || path.join("visual-audit", "comparison", p, `crop-${size}-${y}.png`)
fs.writeFileSync(file, PNG.sync.write(out)); console.log(file)
