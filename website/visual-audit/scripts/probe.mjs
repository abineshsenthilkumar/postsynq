// Usage: node visual-audit/scripts/probe.mjs <url> [width] [height]
// Prints computed geometry/styles of key elements as JSON.
import { chromium } from "playwright-core"

const [url, w = "1440", h = "900"] = process.argv.slice(2)
const browser = await chromium.launch({ channel: "msedge" })
const page = await browser.newPage({ viewport: { width: +w, height: +h } })
await page.goto(url, { waitUntil: "networkidle", timeout: 90000 })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(1500)

const out = await page.evaluate(() => {
  const pick = (el) => {
    if (!el) return null
    const r = el.getBoundingClientRect()
    const s = getComputedStyle(el)
    return {
      tag: el.tagName, cls: el.className?.baseVal ?? el.className,
      text: (el.innerText || "").slice(0, 60),
      x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height),
      font: `${s.fontWeight} ${s.fontSize}/${s.lineHeight} ${s.fontFamily}`, ls: s.letterSpacing,
      color: s.color, bg: s.backgroundColor, bgImg: s.backgroundImage.slice(0, 200),
      border: `${s.borderTopWidth} ${s.borderTopStyle} ${s.borderTopColor}`, radius: s.borderTopLeftRadius,
      pos: s.position, top: s.top, td: s.textDecorationLine, opacity: s.opacity, transform: s.transform,
      mask: (s.maskImage || s.webkitMaskImage || "").slice(0, 200),
    }
  }
  const nav = document.querySelector("nav")
  const h1 = document.querySelector("h1")
  const links = [...(nav?.querySelectorAll("a") ?? [])].map(a => ({ href: a.getAttribute("href"), ...pick(a) }))
  const loaded = [...document.fonts].filter(f => f.status === "loaded").map(f => `${f.family} ${f.weight}`)
  return {
    doc: { scrollW: document.documentElement.scrollWidth, clientW: document.documentElement.clientWidth, scrollH: document.documentElement.scrollHeight },
    nav: pick(nav), navParent: pick(nav?.parentElement), navParent2: pick(nav?.parentElement?.parentElement), links,
    h1: pick(h1), h1Children: [...(h1?.querySelectorAll("*") ?? [])].slice(0, 12).map(pick),
    h1html: h1?.outerHTML.slice(0, 3000),
    p: pick([...document.querySelectorAll("p")].find(p => p.innerText.startsWith("Create once"))),
    fontsLoaded: [...new Set(loaded)],
  }
})
console.log(JSON.stringify(out, null, 1))
await browser.close()
