"use client"

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react"
import { usePathname } from "next/navigation"

type Props = {
  /** Closed variant markup (server-rendered). */
  closed: ReactNode
  /** Open variant markup (server-rendered). */
  open: ReactNode
  /** Selector for the element that toggles; default: the whole component. */
  trigger?: string
  /** Clicking an element matching this (e.g. a menu link) closes without toggling. */
  closeOn?: string
  /** Accessible name for the trigger when it has no text (e.g. a hamburger icon). */
  label?: string
  /** Marker for styling, e.g. "faq" or "menu". */
  kind?: string
}

/**
 * Swaps between two Framer component variants (closed / open) on click, the
 * way Framer's runtime does for FAQ items and the mobile/tablet menu. Both
 * variants' styles live in the generated Framer stylesheet.
 *
 * Accessibility: the trigger becomes a focusable button with aria-expanded;
 * Enter/Space toggle, Escape closes, focus stays on the trigger across the
 * swap, and the component closes on route change.
 */
export default function Toggle({ closed, open, trigger, closeOn, label, kind }: Props) {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const refocus = useRef(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  const findTrigger = () => {
    const root = ref.current
    if (!root) return null
    return (trigger ? root.querySelector(trigger) : root.firstElementChild) as HTMLElement | null
  }

  useEffect(() => {
    const t = findTrigger()
    if (!t) return
    t.setAttribute("role", "button")
    t.setAttribute("tabindex", "0")
    t.setAttribute("aria-expanded", String(isOpen))
    if (label) t.setAttribute("aria-label", isOpen ? `Close ${label}` : `Open ${label}`)
    if (refocus.current) { t.focus(); refocus.current = false }
  })

  const isTrigger = (target: EventTarget) => {
    const t = target as Element
    return trigger ? !!t.closest?.(trigger) : true
  }

  const onClick = (e: MouseEvent) => {
    if (closeOn && (e.target as Element).closest?.(closeOn)) { setOpen(false); return }
    if (!isTrigger(e.target)) return
    setOpen(v => !v)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) { refocus.current = true; setOpen(false); return }
    if ((e.key === "Enter" || e.key === " ") && isTrigger(e.target) && (e.target as Element).getAttribute("role") === "button") {
      e.preventDefault()
      refocus.current = true
      setOpen(v => !v)
    }
  }

  return (
    <div ref={ref} style={{ display: "contents" }} data-toggle={kind} data-open={isOpen ? "" : undefined} onClick={onClick} onKeyDown={onKeyDown}>
      {isOpen ? open : closed}
    </div>
  )
}
