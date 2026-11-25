import type { Metadata } from "next"
import NotFoundPage from "./_framer/pages/notfound"

// Framer's published 404 page ("This page doesn't exist!"), rendered inside the
// shared layout so the navbar stays available. Next serves it with HTTP 404.
export const metadata: Metadata = {
  title: "Page not found | PostSynq",
  robots: { index: false },
}

export default function NotFound() {
  return <NotFoundPage />
}