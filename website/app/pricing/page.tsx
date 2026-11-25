import type { Metadata } from "next"
import PricingPage from "../_framer/pages/pricing"
import { pageMeta } from "../_framer/meta"

export const metadata: Metadata = {
  title: pageMeta.pricing.title,
  description: pageMeta.pricing.description ?? undefined,
}

export default function Page() {
  return <PricingPage />
}
