import Footer from "@/components/custom/footer"
import LanguageSelector from "@/components/custom/language-selector"
import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from "@/config/appInfo"
import Providers from "@/providers/portalProviders"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { useLocale, useMessages, useTimeZone } from "next-intl"
import { Inter } from "next/font/google"
import React from "react"

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

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] })

export default function PortalLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = useLocale()
  const messages = useMessages()
  const timeZone = useTimeZone()
  const timeZoneCode = timeZone ? timeZone.toString() : "UTC"
  const i18nProps = {
    locale,
    messages,
    timeZone: timeZoneCode
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <main>
          <Providers {...i18nProps}>
            <LanguageSelector />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  )
}
