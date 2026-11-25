import { PNG } from "pngjs"
import fs from "node:fs"
for (const p of ["pricing", "contact"]) for (const size of ["1440x900", "390x844"]) {
  const files = [`visual-audit/before/${p}-${size}.png`, `visual-audit/localhost/${p}/${size}.png`, `visual-audit/reference/${p}/${size}.png`]
  const imgs = files.map(f => PNG.sync.read(fs.readFileSync(f)))
  const h = Math.min(size === "1440x900" ? 900 : 844, ...imgs.map(i => i.height))
  const W = imgs.reduce((s, i) => s + i.width, 0) + 20 * (imgs.length - 1)
  const out = new PNG({ width: W, height: h }); out.data.fill(255)
  let x = 0; for (const i of imgs) { PNG.bitblt(i, out, 0, 0, i.width, h, x, 0); x += i.width + 20 }
  const file = `visual-audit/comparison/${p}/before-after-reference-${size}.png`
  fs.writeFileSync(file, PNG.sync.write(out)); console.log(file)
}
