"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/**
 * Framer renders a link nested inside another link as a non-anchor element
 * with an href (HTML forbids <a> inside <a>), and its runtime makes it
 * clickable. The converter keeps that destination as data-href; this restores
 * the click / Enter-key behaviour with one document-level listener.
 */
export default function LinkDelegate() {
  const router = useRouter()
  useEffect(() => {
    const go = (e: Event) => {
      const el = (e.target as Element | null)?.closest?.("[data-href]")
      if (!el) return
      if (e instanceof KeyboardEvent && e.key !== "Enter") return
      const href = el.getAttribute("data-href")!
      e.preventDefault()
      e.stopPropagation()
      const external = /^https?:\/\//.test(href) && !href.startsWith(location.origin)
      const newTab = e instanceof MouseEvent && (e.metaKey || e.ctrlKey)
      if (external || newTab) window.open(href, newTab ? "_blank" : "_self")
      else router.push(href)
    }
    document.addEventListener("click", go, true)
    document.addEventListener("keydown", go, true)
    return () => {
      document.removeEventListener("click", go, true)
      document.removeEventListener("keydown", go, true)
    }
  }, [router])
  return null
}
