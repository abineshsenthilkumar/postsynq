import type { Metadata } from "next"
import HomePage from "./_framer/pages/home"
import { pageMeta } from "./_framer/meta"

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description ?? undefined,
}

export default function Page() {
  return <HomePage />
}
