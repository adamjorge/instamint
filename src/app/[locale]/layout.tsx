import LanguageSelector from "@/components/custom/language-selector"
import Providers from "@/providers/portalProviders"
import "@/styles/globals.css"
import { useLocale, useMessages, useTimeZone } from "next-intl"
import { Inter } from "next/font/google"
import React from "react"
import { Toaster } from "sonner"

export { metadata } from "@/config/metadata"

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
        <main className="min-h-screen">
          <Providers {...i18nProps}>
            <div className="flex flex-col w-full mt-5">
              <div className="ml-5">
                <LanguageSelector />
              </div>
              {children}
            </div>
          </Providers>
          <Toaster position="bottom-right" richColors closeButton />
        </main>
      </body>
    </html>
  )
}
