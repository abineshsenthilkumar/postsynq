"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

/**
 * Makes client-side navigation land where a full page load would - which is
 * what every navigation on the published Framer site is.
 *
 * 1. Scroll: Next.js scrolls a new page into view by its first DOM box, but
 *    Framer's page root is `display: contents` (no box), so e.g. a footer link
 *    clicked at the bottom of Home opened Pricing still scrolled to the
 *    bottom. New navigations now start at the top; back/forward (popstate)
 *    keeps the browser's scroll restoration, and #hash links are left alone.
 *
 * 2. Focus: the navbar lives in the shared layout and survives navigation, so
 *    the clicked link kept focus and the browser drew its focus ring around
 *    e.g. "Pricing" on /pricing. Focus is released from the link that
 *    triggered the navigation - the state a full page load gives. No CSS
 *    outlines are removed, so keyboard focus rings still work while tabbing.
 */
export default function RouteTransitions() {
  const pathname = usePathname()
  const first = useRef(true)
  const popped = useRef(false)

  useEffect(() => {
    const onPop = () => { popped.current = true }
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  useEffect(() => {
    if (first.current) { first.current = false; return }
    if (!popped.current && !window.location.hash) window.scrollTo(0, 0)
    popped.current = false
    const el = document.activeElement as HTMLElement | null
    if (el && el !== document.body && el.closest("a, [data-href], [role='button']")) el.blur()
  }, [pathname])

  return null
}
