import Providers from "@/providers/portalProviders"
import "@/styles/globals.css"
import { useLocale, useMessages, useTimeZone } from "next-intl"
import { Roboto } from "next/font/google"
import React from "react"
import { Toaster } from "sonner"

export { metadata } from "@/config/metadata"

// eslint-disable-next-line new-cap
const roboto = Roboto({ subsets: ["latin"], weight: "500" })

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
      <body className={roboto.className}>
        <main className="min-h-screen">
          <Providers {...i18nProps}>
            <div className="flex flex-col w-full pt-5">{children}</div>
          </Providers>
          <Toaster position="bottom-right" richColors closeButton />
        </main>
      </body>
    </html>
  )
}
