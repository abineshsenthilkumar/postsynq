import type { Metadata } from "next"
import ContactPage from "../_framer/pages/contact"
import { pageMeta } from "../_framer/meta"

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description ?? undefined,
}

export default function Page() {
  return <ContactPage />
}
