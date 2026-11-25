import type { Metadata } from "next"
import PrivacyPage from "../_framer/pages/privacy"
import { pageMeta } from "../_framer/meta"

export const metadata: Metadata = {
  title: pageMeta.privacy.title,
  description: pageMeta.privacy.description ?? undefined,
}

export default function Page() {
  return <PrivacyPage />
}