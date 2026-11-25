import type { Metadata } from "next"
import SolutionsPage from "../_framer/pages/solutions"
import { pageMeta } from "../_framer/meta"

export const metadata: Metadata = {
  title: pageMeta.solutions.title,
  description: pageMeta.solutions.description ?? undefined,
}

export default function Page() {
  return <SolutionsPage />
}
