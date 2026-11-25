// Captures the "open" variant of click-toggled Framer components, which the
// server HTML only contains in their closed state:
//   - FAQ items ("Desktop Closed" -> "Desktop Open")
//   - the tablet / phone navbar ("Tablet" -> "Tablet Open", "Mobile" -> "Mobile Open")
// Output: tools/framer-import/source/states.json
//   { faq: { <page>: [openOuterHTML, ...] }, nav: { tablet: html, phone: html } }
// Usage: node tools/framer-import/harvest-states.mjs
import { chromium } from "playwright-core"
import fs from "node:fs"
import path from "node:path"

const BASE = "https://postsynqq.framer.website"
const SRC = path.resolve("tools/framer-import/source")
const out = { faq: {}, nav: {} }
const browser = await chromium.launch({ channel: "msedge" })

// FAQ items: open each one on a fresh load and record the opened root.
for (const [page, route] of Object.entries({ pricing: "/pricing", contact: "/contact", home: "/", about: "/about", feature: "/feature", solutions: "/solutions" })) {
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await p.goto(BASE + route, { waitUntil: "networkidle", timeout: 120000 })
  const count = await p.locator("[data-framer-name='Desktop Closed']").count()
  const list = []
  for (let i = 0; i < count; i++) {
    const item = p.locator("[data-framer-name='Desktop Closed'], [data-framer-name='Desktop Open']").nth(i)
    await item.scrollIntoViewIfNeeded()
    const name = await item.getAttribute("data-framer-name")
    if (name === "Desktop Closed") await item.click()
    await p.waitForTimeout(900)
    list.push(await item.evaluate(e => e.outerHTML))
  }
  if (list.length) out.faq[page] = list
  console.log(`${page}: ${list.length} FAQ items`)
  await p.close()
}

// Navbar menu at tablet and phone widths.
for (const [bp, [w, h]] of Object.entries({ tablet: [1000, 900], phone: [390, 844] })) {
  const p = await browser.newPage({ viewport: { width: w, height: h } })
  await p.goto(BASE + "/", { waitUntil: "networkidle", timeout: 120000 })
  await p.locator("nav [data-framer-name='Menu Icon']:visible").first().click()
  await p.waitForTimeout(1200)
  out.nav[bp] = await p.evaluate(() => [...document.querySelectorAll("nav")].find(n => n.getClientRects().length)?.outerHTML)
  console.log(`nav ${bp}: ${out.nav[bp]?.length} chars`)
  await p.close()
}
await browser.close()
fs.writeFileSync(path.join(SRC, "states.json"), JSON.stringify(out, null, 1))
