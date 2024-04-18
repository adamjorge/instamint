import Footer from "@/components/custom/footer"
import Providers from "@/providers/providers"
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl"
import React from "react"

import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from "@/config/appInfo"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

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

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <main>
            <Providers>
              {children}
              <Footer />
            </Providers>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
