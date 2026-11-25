// Lists vertical bands of a diff image that contain differing pixels.
// Usage: node visual-audit/scripts/bands.mjs <page> <size>
import { PNG } from "pngjs"
import fs from "node:fs"

const [p, size] = process.argv.slice(2)
const img = PNG.sync.read(fs.readFileSync(`visual-audit/comparison/${p}/${size}.png`))
const rows = []
for (let y = 0; y < img.height; y++) {
  let n = 0
  for (let x = 0; x < img.width; x++) {
    const i = (y * img.width + x) * 4
    // pixelmatch paints differences red (255,0,0) / anti-aliasing yellow.
    if (img.data[i] > 200 && img.data[i + 1] < 80 && img.data[i + 2] < 80) n++
  }
  rows.push(n)
}
let start = -1, total = 0
for (let y = 0; y <= rows.length; y++) {
  const on = y < rows.length && rows[y] > 2
  if (on && start < 0) { start = y; total = 0 }
  if (on) total += rows[y]
  if (!on && start >= 0) { if (total > 200) console.log(`y ${start}-${y} (${y - start}px tall, ${total} px differ)`); start = -1 }
}
