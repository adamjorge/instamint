import Footer from "@/components/footer"
import Providers from "@/providers/providers"
import React from "react"

import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from "@/config/appInfo"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    title: `Apple ${APP_DEFAULT_TITLE}`,
    capable: true,
    statusBarStyle: "black-translucent",
    startupImage: "/splash_screens/main_splash_screen.png"
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
}

export const viewport: Viewport = {
  themeColor: "#ffffff"
}

export default function PortalLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Providers>
        {children}
        <Footer />
      </Providers>
    </main>
  )
}
