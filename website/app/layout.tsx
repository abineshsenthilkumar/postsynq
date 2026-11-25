import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./_framer/framer.css"
import "./_framer/appear.css"
import "./_framer/hover.css"
import "./site.css"
import NavigationBar, { TemplateExtras, templateClassName } from "./_framer/NavigationBar"
import SvgTemplates from "./_framer/SvgTemplates"
import RevealWatcher from "./_components/RevealWatcher"
import RouteTransitions from "./_components/RouteTransitions"
import ScrollReveal from "./_components/ScrollReveal"
import LinkDelegate from "./_components/LinkDelegate"
import FormHandler from "./_components/FormHandler"
import HoverEngine from "./_components/HoverEngine"
import { pageMeta } from "./_framer/meta"

// Site-wide defaults taken from the published Framer page head; each route
// sets its own title/description.
export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description ?? undefined,
  icons: {
    icon: pageMeta.home.icon ?? undefined,
    apple: pageMeta.home.appleIcon ?? undefined,
  },
  openGraph: {
    type: "website",
    title: pageMeta.home.ogTitle ?? undefined,
    description: pageMeta.home.ogDescription ?? undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.ogTitle ?? undefined,
    description: pageMeta.home.ogDescription ?? undefined,
  },
}

// Set before first paint so entrance animations start hidden only when JS is
// running; without JS nothing is ever hidden.
const revealBoot = "document.documentElement.classList.add('reveal-js')"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBoot }} />
      </head>
      <body>
        <div id="main">
          {/* Framer's layout template: page content, then the shared fixed navbar. */}
          <div className={templateClassName} data-layout-template="true" style={{ minHeight: "100vh", width: "auto" }}>
            {children}
            <TemplateExtras />
            <NavigationBar />
          </div>
        </div>
        <SvgTemplates />
        <RevealWatcher />
        <RouteTransitions />
        <ScrollReveal />
        <LinkDelegate />
        <FormHandler />
        <HoverEngine />
      </body>
    </html>
  )
}
