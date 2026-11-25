// Functional checks for the shared footer on localhost.
// Usage: node visual-audit/scripts/footer-check.mjs
// Requires the site on :3000. The newsletter test expects NEWSLETTER_WEBHOOK_URL
// to be unset (it verifies the "not configured" path and never sends real data).
import { chromium } from "playwright-core"

const REF = "https://postsynqq.framer.website"
const LOC = process.env.LOCAL_URL || "http://localhost:3000"
const ROUTES = { home: "/", about: "/about", feature: "/feature", pricing: "/pricing", contact: "/contact", solutions: "/solutions", privacy: "/privacy" }
let pass = 0, fail = 0
const check = (ok, label, detail = "") => { ok ? pass++ : fail++; console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? "  - " + detail : ""}`) }

const browser = await chromium.launch({ channel: "msedge" })
const FOOTER = "[data-framer-name='Footer'] footer"
const visibleFooter = page => page.locator(`${FOOTER}:visible`)
const inventory = page => visibleFooter(page).evaluate(f => [...f.querySelectorAll("a")].map(a => {
  const raw = a.getAttribute("href")
  const href = /^\.\/?/.test(raw) ? "/" + raw.replace(/^\.\/?/, "") : raw
  return `${(a.textContent || "[icon]").replace(/\s+/g, " ").trim()} -> ${href.replace(/\/$/, "") || "/"}${a.target ? " (" + a.target + ")" : ""}`
}).filter(l => !l.startsWith("[icon]"))) // icon links are checked against lib/links.ts in links-check.mjs
// Every text node in the footer must be readable (no stuck animation state).
const hiddenText = page => visibleFooter(page).evaluate(f => {
  const bad = []; const w = document.createTreeWalker(f, NodeFilter.SHOW_TEXT); let n
  while ((n = w.nextNode())) {
    const t = n.nodeValue.trim(); if (!t) continue
    const el = n.parentElement; if (el.closest("[aria-hidden='true']")) continue
    let op = 1; for (let a = el; a; a = a.parentElement) op *= +getComputedStyle(a).opacity
    const r = el.getBoundingClientRect()
    if (op < 0.99 || getComputedStyle(el).visibility !== "visible" || r.width < 1) bad.push(t)
  }
  return bad
})
const settle = async page => { await page.evaluate(async () => { scrollTo(0, document.documentElement.scrollHeight); await new Promise(r => setTimeout(r, 600)) }) }

// Reference link inventory (desktop) - the footer is identical on every page.
const refPage = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await refPage.goto(REF + "/", { waitUntil: "networkidle", timeout: 120000 })
const refLinks = await inventory(refPage)
await refPage.close()

// 1. Every page, desktop / tablet / phone: exactly one visible footer, same links as the reference, all text visible, no errors.
for (const [key, route] of Object.entries(ROUTES)) for (const [w, h] of [[1440, 900], [768, 1024], [390, 844]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  const errors = []
  page.on("pageerror", e => errors.push(String(e)))
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()) })
  await page.goto(LOC + route, { waitUntil: "networkidle", timeout: 120000 })
  await settle(page)
  const total = await page.locator(FOOTER).count()
  const visible = await visibleFooter(page).count()
  const links = await inventory(page)
  const hidden = await hiddenText(page)
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  const same = JSON.stringify(links) === JSON.stringify(refLinks)
  check(visible === 1 && total === 3 && same && !hidden.length && !errors.length && overflow <= 0,
    `${key}@${w}: 1 visible footer, links match reference, text visible, no errors`,
    `visible=${visible} variants=${total} links=${same ? "same" : JSON.stringify(links.filter(l => !refLinks.includes(l)))} hidden=${hidden.slice(0, 3)} errors=${errors.slice(0, 2)} overflow=${overflow}`)
  await page.close()
}

// 2. Client navigation from the footer, back/forward, refresh.
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(LOC + "/", { waitUntil: "networkidle" })
  await settle(page)
  await visibleFooter(page).locator("a", { hasText: /^About$/ }).click()
  await page.waitForURL(LOC + "/about")
  await page.waitForTimeout(800)
  check((await page.evaluate(() => scrollY)) === 0, "footer About link: client navigation lands at the top of /about")
  await settle(page)
  check((await visibleFooter(page).count()) === 1 && !(await hiddenText(page)).length, "after client navigation: one footer, all text visible")
  await visibleFooter(page).locator("a", { hasText: /^Features$/ }).click()
  await page.waitForURL(LOC + "/feature")
  check(true, "footer Features link -> /feature")
  await page.goBack(); await page.waitForURL(LOC + "/about"); await page.waitForTimeout(800); await settle(page)
  check((await visibleFooter(page).count()) === 1 && !(await hiddenText(page)).length, "browser back: footer present and visible")
  await page.goForward(); await page.waitForURL(LOC + "/feature"); await page.waitForTimeout(800); await settle(page)
  check((await visibleFooter(page).count()) === 1 && !(await hiddenText(page)).length, "browser forward: footer present and visible")
  await page.reload({ waitUntil: "networkidle" }); await settle(page)
  check((await visibleFooter(page).count()) === 1 && !(await hiddenText(page)).length, "refresh: footer present and visible")
  // External links open in a new tab, like the reference.
  const ext = await visibleFooter(page).locator("a[href^='http']").evaluateAll(as => as.map(a => a.target))
  check(ext.length > 0 && ext.every(t => t === "_blank"), `external footer links open in a new tab (${ext.length})`)
  await page.close()
}

// 3. Phone: reach a page through the mobile menu, footer is there.
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
  await page.goto(LOC + "/", { waitUntil: "networkidle" })
  await page.locator("nav:visible [data-framer-name='Menu Icon']").first().click()
  await page.waitForTimeout(400)
  await page.locator("nav:visible a[href='/pricing']:visible").first().click()
  await page.waitForURL(LOC + "/pricing"); await page.waitForTimeout(800); await settle(page)
  check((await visibleFooter(page).count()) === 1 && !(await hiddenText(page)).length, "phone menu navigation: footer present and visible")
  await page.close()
}

// 4. Newsletter form: validation, no request for invalid input, single request, honest result.
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const posts = []
  page.on("request", r => { if (r.url().endsWith("/api/newsletter")) posts.push(r.postData()) })
  await page.goto(LOC + "/contact", { waitUntil: "networkidle" })
  await settle(page)
  const form = visibleFooter(page).locator("form")
  const input = form.locator("input[type=email]")
  const status = visibleFooter(page).locator("[data-form-status]")
  check((await input.getAttribute("aria-label")) === "Email address", "email field has an accessible name")
  check((await visibleFooter(page).locator("a[href^='mailto:']").getAttribute("aria-label")) === "Email support@postsynq.in", "email icon link has an accessible name")
  await form.locator("button[type=submit]").click()
  await page.waitForTimeout(300)
  check(posts.length === 0 && (await status.textContent()) === "Please enter a valid email address." && (await input.getAttribute("aria-invalid")) === "true",
    "empty submit: validation message, field marked invalid, nothing sent")
  await input.fill("not-an-email"); await input.press("Enter"); await page.waitForTimeout(300)
  check(posts.length === 0, "invalid email via Enter key: nothing sent")
  await input.fill("footer-test@example.com")
  const response = page.waitForResponse(r => r.url().endsWith("/api/newsletter"), { timeout: 120000 })
  await form.locator("button[type=submit]").click()
  await form.locator("button[type=submit]").click({ force: true }).catch(() => {})
  check((await status.textContent()) === "" && (await form.getAttribute("aria-busy")) === "true", "while sending: form busy, no stale message")
  await response
  await page.waitForTimeout(500)
  const msg = await status.textContent()
  check(posts.length === 1, `double submit sends one request (${posts.length})`)
  check(msg === "Sign-up isn't available right now. Please try again later." && (await status.getAttribute("data-state")) === "error",
    "no backend configured: honest 'unavailable' message, no fake success", msg)
  // Keyboard order inside the form and visible focus ring on a footer link.
  await input.focus(); await page.keyboard.press("Tab")
  check(await form.locator("button[type=submit]").evaluate(b => b === document.activeElement), "Tab moves from the email field to the Subscribe button")
  await visibleFooter(page).locator("a", { hasText: /^Pricing$/ }).focus()
  await page.keyboard.press("Shift+Tab"); await page.keyboard.press("Tab")
  const ring = await page.evaluate(() => { const s = getComputedStyle(document.activeElement); return `${s.outlineStyle} ${s.outlineWidth}` })
  check(!/^none/.test(ring), `keyboard focus on a footer link is visible (${ring})`)
  await page.close()
}

await browser.close()
console.log(`\n${pass} passed, ${fail} failed`)
process.exitCode = fail ? 1 : 0
