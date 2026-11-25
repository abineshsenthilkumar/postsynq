"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Marks [data-reveal] elements with data-in the first time they are on screen.
 * Everything about how they move is in app/_framer/appear.css; this only says
 * when.
 *
 * Progressive enhancement: the hidden pre-animation state only applies under
 * html.reveal-js (set by an inline script in the layout), so without JS the
 * content is simply visible. If IntersectionObserver is unavailable or fails,
 * everything is revealed immediately.
 *
 * Robust to client-side navigation: re-scans on every route change and also
 * watches the DOM for [data-reveal] elements added later (streamed or swapped
 * content, e.g. a Toggle switching variants).
 */
export default function RevealWatcher() {
  const pathname = usePathname()

  useEffect(() => {
    const revealAll = () => document.querySelectorAll("[data-reveal]:not([data-in])").forEach(el => el.setAttribute("data-in", ""))
    if (!("IntersectionObserver" in window) || !("MutationObserver" in window)) {
      revealAll()
      return
    }
    let io: IntersectionObserver
    let mo: MutationObserver
    try {
      io = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.setAttribute("data-in", "")
            io.unobserve(entry.target)
          }
        },
        { rootMargin: "0px 0px -8% 0px" },
      )
      const watch = (root: ParentNode) => root.querySelectorAll("[data-reveal]:not([data-in])").forEach(el => io.observe(el))
      watch(document)
      mo = new MutationObserver(records => {
        for (const r of records) for (const node of r.addedNodes) {
          if (!(node instanceof Element)) continue
          if (node.matches("[data-reveal]:not([data-in])")) io.observe(node)
          watch(node)
        }
      })
      mo.observe(document.body, { childList: true, subtree: true })
    } catch {
      revealAll()
      return
    }
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [pathname])

  return null
}
