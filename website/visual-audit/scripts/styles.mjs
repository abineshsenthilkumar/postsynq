// Compare full computed styles of an element (and descendants) on reference vs localhost.
// The element is located by a JS expression evaluated in the page, e.g.
//   node visual-audit/scripts/styles.mjs / "[...document.querySelectorAll('a')].find(a=>a.href.endsWith('/login'))" [w] [h]
import { chromium } from "playwright-core"

const [route, expr, w = "1440", h = "900", depth = "4"] = process.argv.slice(2)
const PROPS = ["display","position","top","left","right","bottom","width","height","min-width","max-width","padding","margin","gap","border-top","border-right","border-bottom","border-left","border-radius","box-shadow","background-color","background-image","background-size","color","font-family","font-size","font-weight","line-height","letter-spacing","text-decoration-line","opacity","transform","transition","overflow","mask-image","-webkit-mask-image","white-space","z-index","justify-content","align-items","flex","flex-direction","cursor","filter","backdrop-filter"]

async function dump(url) {
  const b = await chromium.launch({ channel: "msedge" })
  const p = await b.newPage({ viewport: { width: +w, height: +h } })
  await p.goto(url, { waitUntil: "networkidle", timeout: 120000 })
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(1200)
  const r = await p.evaluate(([expr, PROPS, depth]) => {
    const root = eval(expr)
    if (!root) return "NOT FOUND"
    const out = []
    const walk = (el, d, path) => {
      const s = getComputedStyle(el), r = el.getBoundingClientRect()
      const o = { path, tag: el.tagName, txt: el.childNodes.length === 1 && el.firstChild.nodeType === 3 ? el.textContent.slice(0, 30) : "", rect: [r.x, r.y, r.width, r.height].map(Math.round).join(",") }
      for (const k of PROPS) { const v = s.getPropertyValue(k); if (v && !["none","normal","auto","0px","rgba(0, 0, 0, 0)","static","visible","0px none rgb(0, 0, 0)","all","1"].includes(v)) o[k] = v.slice(0, 160) }
      for (const pe of ["::before", "::after"]) { const ps = getComputedStyle(el, pe); if (ps.content && ps.content !== "none") o[pe] = `content:${ps.content} bg:${ps.backgroundColor} border:${ps.borderTop} shadow:${ps.boxShadow} pos:${ps.position}` }
      out.push(o)
      if (d < depth) [...el.children].forEach((c, i) => walk(c, d + 1, path + "/" + i))
    }
    walk(root, 0, "0")
    return out
  }, [expr, PROPS, +depth])
  await b.close(); return r
}
const base = process.env.REF || "https://postsynqq.framer.website"
const loc = process.env.LOCAL_URL || "http://localhost:3000"
const which = process.env.ONLY
if (which !== "loc") console.log("REFERENCE", JSON.stringify(await dump(base + route), null, 1))
if (which !== "ref") console.log("LOCALHOST", JSON.stringify(await dump(loc + route), null, 1))
