// Acceptance checks for the Pricing / Contact hero headings, navbar focus and
// route transitions. Compares computed heading styles/positions with the
// published Framer pages. Usage: node visual-audit/scripts/headings-check.mjs
import { chromium } from "playwright-core"

const REF = "https://postsynqq.framer.website"
const LOC = process.env.LOCAL_URL || "http://localhost:3000"
const PAGES = { "/pricing": "Pricing built around your channels.", "/contact": "How can the PostSynq team help you today?" }
const SIZES = [[1920, 1080], [1440, 900], [1280, 800], [1024, 768], [768, 1024], [390, 844], [360, 800]]
let pass = 0, fail = 0
const check = (name, ok, detail = "") => { ok ? pass++ : fail++; console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  - " + detail : ""}`) }

// Heading = the visible element whose text is the headline; words grouped into lines by their top.
const readHeading = (text) => {
  const norm = s => s.replace(/\s+/g, " ").trim()
  const h = [...document.querySelectorAll("h1,h2,h3")].find(e => e.getClientRects().length && norm(e.innerText) === text)
  if (!h) return null
  const s = getComputedStyle(h), r = h.getBoundingClientRect()
  const words = [...h.querySelectorAll(":scope > span")]
  const lines = {}
  for (const w of words) { const t = Math.round(w.getBoundingClientRect().top / 4); (lines[t] ??= []).push(w.innerText.trim()) }
  let op = 1
  for (const w of words.length ? words : [h]) op = Math.min(op, +getComputedStyle(w).opacity)
  return { tag: h.tagName, font: s.fontFamily.split(",")[0].replace(/"/g, ""), size: s.fontSize, weight: s.fontWeight, lh: s.lineHeight, ls: s.letterSpacing, color: s.color, align: s.textAlign,
    x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height), lines: Object.values(lines).map(l => l.join(" ")), minWordOpacity: op }
}

const browser = await chromium.launch({ channel: "msedge" })

// 1. Typography, position, line breaks, visibility - reference vs localhost.
for (const [route, text] of Object.entries(PAGES)) for (const [w, h] of SIZES) {
  const read = async (base) => { const p = await browser.newPage({ viewport: { width: w, height: h } }); await p.goto(base + route, { waitUntil: "networkidle" }); await p.waitForTimeout(2500); const r = await p.evaluate(readHeading, text); await p.close(); return r }
  const ref = await read(REF), loc = await read(LOC)
  if (!ref) { check(`${route}@${w} reference heading found`, false); continue }
  if (!loc) { check(`${route}@${w} heading rendered`, false, "not found"); continue }
  const same = ["font", "size", "weight", "lh", "ls", "color", "align"].filter(k => ref[k] !== loc[k])
  check(`${route}@${w}x${h} visible`, loc.minWordOpacity >= 0.99, `word opacity ${loc.minWordOpacity}`)
  check(`${route}@${w}x${h} typography matches`, same.length === 0, same.length ? same.map(k => `${k}: ref ${ref[k]} / loc ${loc[k]}`).join("; ") : `${loc.font} ${loc.weight} ${loc.size}/${loc.lh} ls ${loc.ls} ${loc.color}`)
  check(`${route}@${w}x${h} position matches`, Math.abs(ref.x - loc.x) <= 1 && Math.abs(ref.y - loc.y) <= 1 && Math.abs(ref.w - loc.w) <= 1 && Math.abs(ref.h - loc.h) <= 1, `ref ${ref.x},${ref.y} ${ref.w}x${ref.h} / loc ${loc.x},${loc.y} ${loc.w}x${loc.h}`)
  check(`${route}@${w}x${h} line breaks match`, JSON.stringify(ref.lines) === JSON.stringify(loc.lines), loc.lines.join(" | "))
}

// 2. Entrance animation actually plays (not just visible).
for (const route of Object.keys(PAGES)) {
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await p.goto(LOC + route, { waitUntil: "domcontentloaded" })
  const samples = []
  for (let i = 0; i < 40; i++) { samples.push(await p.evaluate(() => { const w = document.querySelectorAll("[data-words] [data-word]"); const v = [...w].filter(x => x.getClientRects().length); return v.length ? +getComputedStyle(v[v.length - 1]).opacity : -1 })); await p.waitForTimeout(25) }
  const rose = samples.some(v => v >= 0 && v < 0.5) && samples[samples.length - 1] === 1
  check(`${route} entrance animation plays (last word fades in)`, rose, samples.filter((v, i) => i % 5 === 0).map(v => v.toFixed(2)).join(" "))
  await p.close()
}

// 3. Navbar: no persistent focus ring after clicking; keyboard focus ring still works.
{
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await p.goto(LOC + "/", { waitUntil: "networkidle" })
  for (const label of ["About", "Features", "Pricing", "Contact"]) {
    await p.locator("nav:visible").getByText(label, { exact: true }).first().click()
    await p.waitForTimeout(1200)
    const st = await p.evaluate(label => { const a = document.activeElement; const link = [...document.querySelectorAll("nav a")].find(x => x.getClientRects().length && x.innerText.trim() === label); return { linkFocused: a === link, active: a?.tagName } }, label)
    check(`nav "${label}": link not left focused after navigating`, !st.linkFocused, `activeElement=${st.active}`)
  }
  await p.keyboard.press("Tab"); await p.keyboard.press("Tab")
  const kb = await p.evaluate(() => { const a = document.activeElement; const s = getComputedStyle(a); return { tag: a.tagName, fv: a.matches(":focus-visible"), outline: `${s.outlineStyle} ${s.outlineWidth}` } })
  check("keyboard Tab still shows a focus ring", kb.fv && kb.outline.split(" ")[0] !== "none", JSON.stringify(kb))
  await p.close()
}

// 4. Route transitions: footer link lands at top; back/forward keep headings visible.
{
  const p = await browser.newPage({ viewport: { width: 390, height: 844 } })
  await p.goto(LOC + "/", { waitUntil: "networkidle" })
  const footer = p.locator("[data-framer-name='Footer'] a[href='/pricing']:visible").first()
  await footer.scrollIntoViewIfNeeded(); const before = await p.evaluate(() => scrollY)
  await footer.click(); await p.waitForURL(LOC + "/pricing"); await p.waitForTimeout(1500)
  const st = await p.evaluate(() => ({ y: scrollY, op: +getComputedStyle([...document.querySelectorAll("[data-words] [data-word]")].filter(x => x.getClientRects().length).pop()).opacity }))
  check("phone: footer link from bottom of Home opens Pricing at the top", st.y === 0, `scrollY ${before} -> ${st.y}`)
  check("phone: Pricing heading visible after footer navigation", st.op === 1, `opacity ${st.op}`)
  await p.locator("nav:visible [data-framer-name='Menu Icon']").first().click(); await p.waitForTimeout(400)
  await p.locator("nav:visible a[href='/contact']:visible").first().click(); await p.waitForURL(LOC + "/contact"); await p.waitForTimeout(1500)
  const vis = async () => p.evaluate(() => Math.min(...[...document.querySelectorAll("[data-words] [data-word]")].filter(x => x.getClientRects().length).map(x => +getComputedStyle(x).opacity)))
  check("phone: Contact heading visible after mobile-menu navigation", (await vis()) === 1)
  await p.goBack(); await p.waitForURL(LOC + "/pricing"); await p.waitForTimeout(1500)
  check("back button -> Pricing heading visible", (await vis()) === 1)
  await p.goForward(); await p.waitForURL(LOC + "/contact"); await p.waitForTimeout(1500)
  check("forward button -> Contact heading visible", (await vis()) === 1)
  await p.goBack(); await p.waitForURL(LOC + "/pricing"); await p.goBack(); await p.waitForURL(LOC + "/"); await p.waitForTimeout(1200)
  const restored = await p.evaluate(() => scrollY)
  check("back to Home restores its scroll position", Math.abs(restored - before) < 50, `expected ~${before}, got ${restored}`)
  await p.reload({ waitUntil: "networkidle" })
  await p.goto(LOC + "/contact", { waitUntil: "networkidle" }); await p.reload({ waitUntil: "networkidle" }); await p.waitForTimeout(1500)
  check("refresh -> Contact heading visible", (await vis()) === 1)
  const errs = []; p.on("console", m => m.type() === "error" && errs.push(m.text()))
  await p.goto(LOC + "/pricing", { waitUntil: "networkidle" }); await p.waitForTimeout(800)
  check("no console errors on /pricing", errs.length === 0, errs.join(" | ").slice(0, 200))
  await p.close()
}

await browser.close()
console.log(`\n${pass}/${pass + fail} passed`)
