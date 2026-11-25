// Downloads the published Framer pages' server-rendered HTML (UTF-8) into
// tools/framer-import/source/. Run harvest.mjs and convert.mjs afterwards.
// Usage: node tools/framer-import/fetch.mjs
import fs from "node:fs"
import path from "node:path"

const BASE = "https://postsynqq.framer.website"
const ROUTES = { home: "/", about: "/about", feature: "/feature", pricing: "/pricing", contact: "/contact", solutions: "/solutions", privacy: "/privacy", notfound: "/404" }
const SRC = path.resolve("tools/framer-import/source")
fs.mkdirSync(SRC, { recursive: true })

// Right after a publish Framer's CDN can briefly serve an empty page shell
// (no rendered page). Never overwrite a good snapshot with one: retry with a
// cache-busting query, and fail loudly if it persists.
const isRendered = html => html.includes("data-framer-root") && /<div id="main"[^>]*>[\s\S]{2000,}/.test(html)

for (const [key, route] of Object.entries(ROUTES)) {
  let html = null
  for (let attempt = 0; attempt < 5 && !html; attempt++) {
    const url = BASE + route + (attempt ? `?_=${Date.now()}` : "")
    const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (site-migration)" } })
    if (!res.ok && !(key === "notfound" && res.status === 404)) throw new Error(`${route}: HTTP ${res.status}`)
    const text = new TextDecoder("utf-8").decode(await res.arrayBuffer())
    if (isRendered(text)) html = text
    else { console.log(`${key}: got an unrendered shell (${text.length} chars), retrying`); await new Promise(r => setTimeout(r, 3000)) }
  }
  if (!html) throw new Error(`${route}: Framer kept serving an unrendered shell - snapshot left unchanged`)
  fs.writeFileSync(path.join(SRC, `${key}.html`), html, "utf8")
  const published = /Published ([^-]+)-->/.exec(html)?.[1]?.trim() ?? "?"
  console.log(`${key}: ${html.length} chars (published ${published})`)
}
