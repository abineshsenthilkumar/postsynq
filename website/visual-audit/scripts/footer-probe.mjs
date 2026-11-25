// Probes the footer's interactive behaviour on the reference and localhost:
// entrance animation (opacity/transform of footer layers as it scrolls in),
// hover style changes on links/icons/buttons, and input focus styling.
// Usage: node visual-audit/scripts/footer-probe.mjs [reference|local|both]
import { chromium } from "playwright-core"

const TARGETS = { reference: "https://postsynqq.framer.website", local: process.env.LOCAL_URL || "http://localhost:3000" }
const which = process.argv[2] || "both"
const PROPS = ["color", "backgroundColor", "opacity", "transform", "textDecorationLine", "borderTopColor", "boxShadow", "outlineStyle", "outlineColor", "outlineWidth"]

const browser = await chromium.launch({ channel: "msedge" })
const results = {}
for (const [name, base] of Object.entries(TARGETS)) {
  if (which !== "both" && which !== name) continue
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(base + "/", { waitUntil: "networkidle", timeout: 120000 })
  // 1. Entrance: park the footer just below the fold, then scroll it in and sample.
  const sample = () => page.evaluate(() => {
    const f = [...document.querySelectorAll("[data-framer-name='Footer'] footer")].find(e => e.getClientRects().length)
    const out = []
    for (const el of [f, ...f.querySelectorAll("*")]) {
      const s = getComputedStyle(el)
      if (+s.opacity < 0.999 || (s.transform !== "none" && !/^matrix\(1, 0, 0, 1, 0, 0\)$/.test(s.transform))) out.push(`${el.tagName.toLowerCase()}.${(el.getAttribute("class") || "").split(" ")[0]}[${el.getAttribute("data-framer-name") || ""}] o=${s.opacity} t=${s.transform}`)
    }
    return out
  })
  await page.evaluate(() => {
    const f = [...document.querySelectorAll("[data-framer-name='Footer']")].find(e => e.getClientRects().length)
    scrollTo(0, f.getBoundingClientRect().top + scrollY - innerHeight - 50)
  })
  await page.waitForTimeout(1000)
  const parked = await sample()
  await page.evaluate(() => {
    const f = [...document.querySelectorAll("[data-framer-name='Footer']")].find(e => e.getClientRects().length)
    scrollTo(0, f.getBoundingClientRect().top + scrollY - 100)
  })
  const t0 = await sample()
  await page.waitForTimeout(150); const t150 = await sample()
  await page.waitForTimeout(2000); const t2 = await sample()

  // 2. Hover + focus on representative controls.
  const style = (loc) => loc.evaluate((e, props) => { const s = getComputedStyle(e); const o = {}; for (const p of props) o[p] = s[p]; return o }, PROPS)
  const deep = async (loc) => {
    // the element itself plus its first text descendant (colour often lives there)
    const self = await style(loc)
    const txt = loc.locator("p, span").first()
    return { self, text: (await txt.count()) ? await style(txt) : null }
  }
  const footer = page.locator("[data-framer-name='Footer'] footer:visible")
  const controls = {
    "link Home": footer.locator("a", { hasText: /^Home$/ }).first(),
    "link Free trial": footer.locator("a", { hasText: "Free trial" }).first(),
    "lime icon 1": footer.locator("a, [data-framer-name]").filter({ has: page.locator("svg") }).first(),
    "Subscribe button": footer.locator("button[type=submit]").first(),
    "Visit AtSpeed": footer.locator("a", { hasText: "Visit AtSpeed" }).first(),
    "Privacy (bottom)": footer.locator("a", { hasText: /^Privacy$/ }).first(),
  }
  const hover = {}
  for (const [label, loc] of Object.entries(controls)) {
    if (!(await loc.count())) { hover[label] = "not found"; continue }
    await page.mouse.move(0, 0); await page.waitForTimeout(400)
    const rest = await deep(loc)
    await loc.hover(); await page.waitForTimeout(900)
    const hov = await deep(loc)
    const changed = {}
    for (const part of ["self", "text"]) if (rest[part]) for (const p of PROPS) if (rest[part][p] !== hov[part][p]) changed[`${part}.${p}`] = `${rest[part][p]} -> ${hov[part][p]}`
    hover[label] = Object.keys(changed).length ? changed : "no change"
  }
  await page.mouse.move(0, 0)
  // 3. Input focus (keyboard) styling: the input and its form container.
  const input = footer.locator("input[placeholder]").first()
  const form = footer.locator("form").first()
  const before = { input: await style(input), form: await style(form) }
  await input.focus(); await page.waitForTimeout(600)
  const after = { input: await style(input), form: await style(form) }
  const focus = {}
  for (const part of ["input", "form"]) for (const p of PROPS) if (before[part][p] !== after[part][p]) focus[`${part}.${p}`] = `${before[part][p]} -> ${after[part][p]}`
  // 4. Link inventory (text -> destination).
  const links = await footer.evaluate(f => [...f.querySelectorAll("a")].map(a => `${(a.textContent || a.getAttribute("aria-label") || "[icon]").replace(/\s+/g, " ").trim()} -> ${a.getAttribute("href")}${a.target ? " (" + a.target + ")" : ""}`))
  results[name] = { entrance: { parked: parked.length, t0: t0.length, t150: t150.length, t2: t2.length, sampleT0: t0.slice(0, 6), sampleT2: t2.slice(0, 6) }, hover, focus: Object.keys(focus).length ? focus : "no change", links }
  await page.close()
}
await browser.close()
console.log(JSON.stringify(results, null, 2))
