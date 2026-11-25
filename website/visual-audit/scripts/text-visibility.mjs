// Text-visibility audit: lists text that a visitor can read on the reference
// Framer page but not on localhost (missing, transparent, zero-size, or stuck
// in an animation state). Full-page pixel similarity can miss a hidden
// heading - this checks the words themselves.
// Usage: node visual-audit/scripts/text-visibility.mjs [pages] [sizes] [--nav]
//   --nav  reach each page by client-side navigation from "/" instead of a direct load
import { chromium } from "playwright-core"

const REF = "https://postsynqq.framer.website"
const LOC = process.env.LOCAL_URL || "http://localhost:3000"
const ROUTES = { home: "/", about: "/about", feature: "/feature", pricing: "/pricing", contact: "/contact", solutions: "/solutions", privacy: "/privacy" }
const args = process.argv.slice(2).filter(a => !a.startsWith("--"))
const viaNav = process.argv.includes("--nav")
const pages = (args[0] || Object.keys(ROUTES).join(",")).split(",")
const sizes = (args[1] || "1440x900,390x844").split(",").map(s => s.split("x").map(Number))

async function visibleText(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 300) { scrollTo(0, y); await new Promise(r => setTimeout(r, 40)) }
    scrollTo(0, 0)
  })
  await page.waitForTimeout(1800)
  return page.evaluate(() => {
    const seen = []
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    let n
    while ((n = w.nextNode())) {
      const text = n.nodeValue.replace(/\s+/g, " ").trim()
      if (!text) continue
      const el = n.parentElement
      if (!el || el.closest("script,style,noscript,#__framer-badge-container,[aria-hidden='true']")) continue
      const r = el.getBoundingClientRect()
      if (!el.getClientRects().length || r.width < 1 || r.height < 1) continue
      const s = getComputedStyle(el)
      if (s.visibility !== "visible") continue
      const c = s.color.match(/[\d.]+/g)
      if (c && c.length === 4 && +c[3] < 0.2) continue
      let op = 1
      for (let a = el; a; a = a.parentElement) op *= +getComputedStyle(a).opacity
      if (op < 0.5) continue
      seen.push(text)
    }
    return seen
  })
}

const browser = await chromium.launch({ channel: "msedge" })
let problems = 0
for (const p of pages) for (const [w, h] of sizes) {
  const ref = await browser.newPage({ viewport: { width: w, height: h } })
  await ref.goto(REF + ROUTES[p], { waitUntil: "networkidle", timeout: 120000 })
  const refText = new Set(await visibleText(ref)); await ref.close()

  const loc = await browser.newPage({ viewport: { width: w, height: h } })
  if (viaNav && ROUTES[p] !== "/") {
    await loc.goto(LOC + "/", { waitUntil: "networkidle" })
    // Navigate the way a visitor would: desktop navbar link, or open the
    // tablet/phone menu first; pages not in the navbar via a visible footer link.
    const navLink = loc.locator(`nav:visible a[href='${ROUTES[p]}']:visible`).first()
    if (!(await navLink.count())) {
      const icon = loc.locator("nav:visible [data-framer-name='Menu Icon']").first()
      if (await icon.count()) { await icon.click(); await loc.waitForTimeout(400) }
    }
    const link = loc.locator(`nav:visible a[href='${ROUTES[p]}']:visible`).first()
    if (await link.count()) await link.click()
    else await loc.locator(`a[href='${ROUTES[p]}']:visible`).first().click()
    await loc.waitForURL(LOC + ROUTES[p], { timeout: 20000 })
  } else await loc.goto(LOC + ROUTES[p], { waitUntil: "networkidle", timeout: 120000 })
  const locList = await visibleText(loc); const locText = new Set(locList); await loc.close()

  // Text may be split differently (e.g. one span per character): match against the
  // whole visible local text with whitespace removed.
  const corpus = locList.join("").replace(/\s+/g, "")
  const missing = [...refText].filter(t => t.length >= 3 && !locText.has(t) && !corpus.includes(t.replace(/\s+/g, "")) && !/framer/i.test(t))
  problems += missing.length
  console.log(`${missing.length ? "FAIL" : "PASS"}  ${p}@${w}x${h}${viaNav ? " (client nav)" : ""}: ${refText.size} visible texts on reference, ${missing.length} not visible locally${missing.length ? "\n      " + missing.slice(0, 12).map(t => JSON.stringify(t.slice(0, 70))).join("\n      ") : ""}`)
}
await browser.close()
console.log(problems ? `\n${problems} text items visible on the reference but not locally` : "\nAll reference text is visible locally")
