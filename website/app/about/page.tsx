import type { Metadata } from "next"
import AboutPage from "../_framer/pages/about"
import { pageMeta } from "../_framer/meta"

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description ?? undefined,
}

export default function Page() {
  return <AboutPage />
}
