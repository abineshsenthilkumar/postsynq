/**
 * Newsletter sign-up (footer "Subscribe to the PostSynq newsletter" form on every page).
 *
 * The published Framer site posts this form to Framer's own form backend,
 * which is not available outside Framer. Submissions are forwarded to the
 * webhook configured in NEWSLETTER_WEBHOOK_URL (e.g. a Zapier/Make hook, a
 * CRM or mailing-list endpoint). Until it is configured, the endpoint answers
 * 503 and the form says sign-up is unavailable - it never reports a success
 * that did not happen.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { email?: unknown } | null
  const email = typeof body?.email === "string" ? body.email.trim() : ""
  if (!email || email.length > 254 || !EMAIL.test(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 })
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL
  if (!webhook) return Response.json({ ok: false, error: "not_configured" }, { status: 503 })

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, source: "postsynq-website", submittedAt: new Date().toISOString() }),
    })
    if (!res.ok) return Response.json({ ok: false, error: "upstream" }, { status: 502 })
  } catch {
    return Response.json({ ok: false, error: "upstream" }, { status: 502 })
  }
  return Response.json({ ok: true })
}
