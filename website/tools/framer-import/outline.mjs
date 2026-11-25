// Prints the top-level structure of a saved Framer page (debug helper).
// Usage: node tools/framer-import/outline.mjs <file.html> [depth]
import { JSDOM } from "jsdom"
import fs from "node:fs"

const [file, depth = "3"] = process.argv.slice(2)
const doc = new JSDOM(fs.readFileSync(file, "utf8")).window.document
const root = doc.querySelector("[data-framer-root]")
const walk = (el, d) => {
  const name = el.getAttribute("data-framer-name") || ""
  const cls = (el.getAttribute("class") || "").split(" ").slice(0, 3).join(".")
  const nav = el.querySelector("nav") || el.tagName === "NAV" ? " [NAV]" : ""
  const hidden = /hidden-\w+/.exec(el.getAttribute("class") || "")?.[0] ?? ""
  console.log(`${"  ".repeat(d)}${el.tagName.toLowerCase()}.${cls} "${name}" ${hidden}${nav} (${el.outerHTML.length}b)`)
  if (d < +depth) for (const c of el.children) if (c.tagName !== "STYLE") walk(c, d + 1)
}
walk(root, 0)
console.log("siblings of root:", [...root.parentElement.children].map(c => c.tagName + "." + c.className).join(" | "))
console.log("main children:", [...doc.querySelector("#main").children].map(c => c.tagName + "." + c.className + "#" + c.id).join(" | "))
console.log("body children:", [...doc.body.children].map(c => c.tagName + "#" + c.id + "." + c.className).join(" | "))
