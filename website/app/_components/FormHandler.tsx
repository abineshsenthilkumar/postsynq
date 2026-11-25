"use client"

import { useEffect } from "react"

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MESSAGES: Record<string, string> = {
  ok: "Thanks! You're on the list.",
  invalid_email: "Please enter a valid email address.",
  not_configured: "Sign-up isn't available right now. Please try again later.",
  upstream: "Something went wrong. Please try again.",
}

/**
 * Handles the Framer newsletter forms (form[data-framer-form]) in place of
 * Framer's runtime: posts the email to /api/newsletter and reports the real
 * outcome in a polite live region under the form. Framer's hidden honeypot
 * fields are honoured - if a bot fills them, nothing is sent.
 */
export default function FormHandler() {
  useEffect(() => {
    const status = (form: HTMLFormElement) => {
      let el = form.nextElementSibling as HTMLElement | null
      if (!el?.hasAttribute("data-form-status")) {
        el = document.createElement("p")
        el.setAttribute("data-form-status", "")
        el.setAttribute("role", "status")
        el.setAttribute("aria-live", "polite")
        form.after(el)
      }
      return el
    }
    const onSubmit = async (e: SubmitEvent) => {
      const form = (e.target as Element).closest?.("form[data-framer-form]") as HTMLFormElement | null
      if (!form) return
      e.preventDefault()
      if (form.dataset.state === "loading") return
      const inputs = [...form.querySelectorAll<HTMLInputElement>("input")]
      const honeypot = inputs.some(i => i.getAttribute("aria-hidden") === "true" && i.value)
      const field = inputs.find(i => i.getAttribute("aria-hidden") !== "true")
      if (honeypot || !field) return
      const out = status(form)
      // Same rule as the API: reject obviously invalid addresses without a request.
      const value = field.value.trim()
      if (!value || value.length > 254 || !EMAIL.test(value)) {
        form.dataset.state = out.dataset.state = "error"
        out.textContent = MESSAGES.invalid_email
        field.setAttribute("aria-invalid", "true")
        field.focus()
        return
      }
      form.dataset.state = out.dataset.state = "loading"
      form.setAttribute("aria-busy", "true")
      out.textContent = "" // no stale result while the request is in flight
      let code = "upstream"
      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: value }),
        })
        const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
        code = res.ok && json.ok ? "ok" : json.error ?? "upstream"
      } catch {
        code = "upstream"
      }
      form.removeAttribute("aria-busy")
      form.dataset.state = code === "ok" ? "success" : "error"
      out.dataset.state = form.dataset.state
      out.textContent = MESSAGES[code] ?? MESSAGES.upstream
      if (code === "ok") { form.reset(); field.removeAttribute("aria-invalid") }
      else field.setAttribute("aria-invalid", code === "invalid_email" ? "true" : "false")
    }
    document.addEventListener("submit", onSubmit)
    return () => document.removeEventListener("submit", onSubmit)
  }, [])
  return null
}
