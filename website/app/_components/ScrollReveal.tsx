"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Drives Framer's "Scroll Reveal Paragraph" (Home, "Why PostSynQ"): characters
 * darken one by one as the paragraph scrolls through the viewport.
 *
 * Mapping measured on the published site at 1440, 1000 and 390px wide:
 *   progress = (0.85 * vh - top) / (0.45 * vh + height), clamped 0..1
 *   - starts when the paragraph's top reaches 85% of the viewport height
 *   - completes when its bottom reaches 40%
 *   revealed = progress * (characters + 6)   (6-character soft edge)
 * This sets one custom property (--sr) per paragraph; the colours themselves
 * are computed in CSS (app/_framer/appear.css).
 */
const START = 0.85
const END = 0.4
const EDGE = 6

export default function ScrollReveal() {
  const pathname = usePathname()
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")]
    if (!els.length) return
    const counts = new Map(els.map(el => [el, el.querySelectorAll("[data-ch]").length]))
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      for (const el of els) {
        if (!el.getClientRects().length) continue // hidden breakpoint variant
        const r = el.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, (START * vh - r.top) / ((START - END) * vh + r.height)))
        el.style.setProperty("--sr", (progress * (counts.get(el)! + EDGE)).toFixed(2))
      }
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [pathname])
  return null
}
