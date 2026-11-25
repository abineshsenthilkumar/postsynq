"use client"

import { useEffect } from "react"

/**
 * Framer hover variants without Framer's runtime.
 *
 * Hoverable component roots carry data-hover (added by the converter). Like
 * Framer, hovering adds class "hover" to the root; the hover layout lives in
 * framer.css and the colour changes in hover.css. Framer animates the layout
 * change; this does the same with a FLIP transition: measure layers, switch
 * the class, then animate each moved layer from its old box to its new one
 * (measured on the reference: ~120-200ms, slight spring).
 */
const DURATION = 220
const EASING = "cubic-bezier(0.25, 1.1, 0.5, 1)"

function flip(root: HTMLElement, mutate: () => void) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const layers = reduce ? [] : ([...root.querySelectorAll("[class]")] as HTMLElement[]).filter(e => !(e instanceof SVGElement)).slice(0, 80)
  const first = new Map(layers.map(e => [e, e.getBoundingClientRect()]))
  mutate()
  if (reduce) return
  const moved = new Set<Element>()
  for (const el of layers) {
    const a = first.get(el)!, b = el.getBoundingClientRect()
    if (!b.width || !b.height || !a.width || !a.height) continue
    const dx = a.left - b.left, dy = a.top - b.top, sx = a.width / b.width, sy = a.height / b.height
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && Math.abs(sx - 1) < 0.01 && Math.abs(sy - 1) < 0.01) continue
    moved.add(el)
    // A layer inside a moving layer travels with its parent already.
    let p = el.parentElement, nested = false
    while (p && p !== root) { if (moved.has(p)) { nested = true; break } p = p.parentElement }
    if (nested) continue
    el.animate(
      [{ transformOrigin: "0 0", transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transformOrigin: "0 0", transform: "none" }],
      { duration: DURATION, easing: EASING },
    )
  }
}

export default function HoverEngine() {
  useEffect(() => {
    const over = (e: PointerEvent) => {
      if (e.pointerType === "touch") return
      const root = (e.target as Element).closest?.("[data-hover]") as HTMLElement | null
      if (root && !root.classList.contains("hover")) flip(root, () => root.classList.add("hover"))
    }
    const out = (e: PointerEvent) => {
      const root = (e.target as Element).closest?.("[data-hover]") as HTMLElement | null
      if (!root || (e.relatedTarget instanceof Node && root.contains(e.relatedTarget))) return
      if (root.classList.contains("hover")) flip(root, () => root.classList.remove("hover"))
    }
    document.addEventListener("pointerover", over)
    document.addEventListener("pointerout", out)
    return () => {
      document.removeEventListener("pointerover", over)
      document.removeEventListener("pointerout", out)
    }
  }, [])
  return null
}
