// Functional checks against the local site (Playwright + installed Edge).
// Usage: node visual-audit/scripts/functional.mjs
import { chromium } from "playwright-core"

const LOC = process.env.LOCAL_URL || "http://localhost:3000"
const ROUTES = ["/", "/about", "/feature", "/pricing", "/contact", "/solutions"]
const results = []
const check = (name, ok, detail = "") => { results.push({ name, ok, detail }); console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  - " + detail : ""}`) }

const browser = await chromium.launch({ channel: "msedge" })
const newPage = async (w = 1440, h = 900) => {
  const p = await browser.newPage({ viewport: { width: w, height: h } })
  p._errors = []
  p.on("console", m => { if (m.type() === "error") p._errors.push(m.text()) })
  p.on("pageerror", e => p._errors.push(String(e)))
  return p
}
const visibleNav = p => p.locator("nav:visible").first()

// 1. Direct access + refresh, console errors, navbar visible & fixed at short viewports.
for (const r of ROUTES) {
  const p = await newPage(1280, 700)
  const res = await p.goto(LOC + r, { waitUntil: "networkidle" })
  await p.reload({ waitUntil: "networkidle" })
  const navBox = await visibleNav(p).boundingBox()
  await p.mouse.wheel(0, 2500); await p.waitForTimeout(600)
  const navBox2 = await visibleNav(p).boundingBox()
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  const framerLinks = await p.evaluate(() => [...document.querySelectorAll("a[href]")].map(a => a.href).filter(h => /framer\.(website|com)/.test(h)))
  const h1s = await p.locator("h1:visible").count()
  check(`${r} loads (direct + refresh)`, res.status() === 200, `status ${res.status()}`)
  check(`${r} navbar visible at top in a 700px-tall window`, navBox && navBox.y === 0 && navBox.height > 40, JSON.stringify(navBox))
  check(`${r} navbar stays fixed after scrolling`, navBox2 && navBox2.y === 0)
  check(`${r} no horizontal overflow`, overflow <= 0, `${overflow}px`)
  check(`${r} no links back to Framer`, framerLinks.length === 0, framerLinks.slice(0, 3).join(", "))
  check(`${r} at most one visible h1`, h1s <= 1, `${h1s} visible${h1s === 0 ? " (none on the published Framer page either)" : ""}`)
  const errs = p._errors.filter(e => !/favicon/.test(e))
  check(`${r} no console/hydration errors`, errs.length === 0, errs.slice(0, 2).join(" | ").slice(0, 300))
  await p.close()
}

// 2. Desktop navbar clicks, CTAs, back/forward.
{
  const p = await newPage()
  await p.goto(LOC + "/", { waitUntil: "networkidle" })
  const nav = visibleNav(p)
  for (const [text, path] of [["About", "/about"], ["Features", "/feature"], ["Pricing", "/pricing"], ["Contact", "/contact"]]) {
    await nav.getByText(text, { exact: true }).first().click()
    await p.waitForURL(LOC + path, { timeout: 15000 }).catch(() => {})
    check(`navbar "${text}" -> ${path}`, new URL(p.url()).pathname === path, p.url())
  }
  await nav.locator("a[href='/']").first().click()
  await p.waitForURL(LOC + "/", { timeout: 15000 }).catch(() => {})
  check("logo -> /", new URL(p.url()).pathname === "/", p.url())
  await p.goBack(); await p.waitForTimeout(800)
  check("browser back", new URL(p.url()).pathname === "/contact", p.url())
  await p.goForward(); await p.waitForTimeout(800)
  check("browser forward", new URL(p.url()).pathname === "/", p.url())
  const login = await nav.locator("a", { hasText: "Log in" }).first().getAttribute("href")
  const trial = await nav.locator("a", { hasText: "Start free trial" }).first().getAttribute("href")
  check("Log in -> PostSynq app", login === "https://www.postsynq.in/login", login)
  check("Start free trial -> PostSynq app", trial === "https://www.postsynq.in/signup", trial)
  await p.close()
}

// 3. Mobile + tablet menu.
for (const [label, w, h] of [["phone", 390, 844], ["tablet", 1000, 900]]) {
  const p = await newPage(w, h)
  await p.goto(LOC + "/", { waitUntil: "networkidle" })
  const icon = p.locator("nav:visible [data-framer-name='Menu Icon']").first()
  check(`${label}: menu button has role/aria-expanded`, (await icon.getAttribute("role")) === "button" && (await icon.getAttribute("aria-expanded")) === "false")
  await icon.click(); await p.waitForTimeout(400)
  const openName = label === "phone" ? "Mobile Open" : "Tablet Open"
  check(`${label}: menu opens`, await p.locator(`nav[data-framer-name='${openName}']:visible`).count() === 1)
  check(`${label}: aria-expanded=true when open`, (await p.locator("nav:visible [data-framer-name='Menu Icon']").first().getAttribute("aria-expanded")) === "true")
  await p.keyboard.press("Escape"); await p.waitForTimeout(300)
  check(`${label}: Escape closes menu`, await p.locator(`nav[data-framer-name='${openName}']`).count() === 0)
  const focused = await p.evaluate(() => document.activeElement?.getAttribute("data-framer-name"))
  check(`${label}: focus returns to menu button`, focused === "Menu Icon", String(focused))
  await p.locator("nav:visible [data-framer-name='Menu Icon']").first().click(); await p.waitForTimeout(400)
  await p.locator(`nav[data-framer-name='${openName}'] a[href='/pricing']`).first().click()
  await p.waitForURL(LOC + "/pricing", { timeout: 15000 }).catch(() => {})
  await p.waitForTimeout(500)
  check(`${label}: menu link navigates`, new URL(p.url()).pathname === "/pricing", p.url())
  check(`${label}: menu closes after navigating`, await p.locator(`nav[data-framer-name='${openName}']`).count() === 0)
  await p.close()
}

// 4. FAQ accordion.
for (const r of ["/pricing", "/contact"]) {
  const p = await newPage()
  await p.goto(LOC + r, { waitUntil: "networkidle" })
  const closed = await p.locator("[data-framer-name='Desktop Closed']").count()
  await p.locator("[data-framer-name='Desktop Closed']").first().click(); await p.waitForTimeout(300)
  const open1 = await p.locator("[data-framer-name='Desktop Open']").count()
  await p.locator("[data-framer-name='Desktop Open']").first().click(); await p.waitForTimeout(300)
  const open2 = await p.locator("[data-framer-name='Desktop Open']").count()
  await p.locator("[data-framer-name='Desktop Closed']").first().focus()
  await p.keyboard.press("Enter"); await p.waitForTimeout(300)
  const open3 = await p.locator("[data-framer-name='Desktop Open']").count()
  check(`${r} FAQ: ${closed} items, click opens / closes, Enter opens`, closed >= 5 && open1 === 1 && open2 === 0 && open3 === 1, `closed=${closed} open after click=${open1} after 2nd click=${open2} after Enter=${open3}`)
  await p.close()
}

// 5. Footer links resolve.
{
  const p = await newPage()
  await p.goto(LOC + "/", { waitUntil: "networkidle" })
  const hrefs = await p.evaluate(() => [...new Set([...document.querySelectorAll("[data-framer-name='Footer'] a[href], [data-framer-name='Footer'] [data-href]")].map(a => a.getAttribute("href") ?? a.getAttribute("data-href")))])
  for (const h of hrefs) {
    if (/^(mailto|tel):/.test(h)) { check(`footer ${h}`, true, "contact link"); continue }
    const url = h.startsWith("/") ? LOC + h : h
    let status = 0
    try { status = (await p.request.get(url, { maxRedirects: 5, timeout: 20000 })).status() } catch (e) { status = String(e).slice(0, 60) }
    check(`footer link ${h}`, status === 200, `HTTP ${status}`)
  }
  await p.close()
}

await browser.close()
const failed = results.filter(r => !r.ok)
console.log(`\n${results.length - failed.length}/${results.length} passed`)
