import type { Metadata } from "next"
import FeaturePage from "../_framer/pages/feature"
import { pageMeta } from "../_framer/meta"

export const metadata: Metadata = {
  title: pageMeta.feature.title,
  description: pageMeta.feature.description ?? undefined,
}

export default function Page() {
  return <FeaturePage />
}
