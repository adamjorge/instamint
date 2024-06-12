"use client"

import { Locale } from "@/config/i18n/locales"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { type AbstractIntlMessages, NextIntlClientProvider } from "next-intl"
import React, { useState } from "react"

export default function Providers({
  children,
  messages,
  locale,
  timeZone
}: Readonly<{
  children: React.ReactNode
  messages: AbstractIntlMessages
  locale: Locale
  timeZone: string
}>) {
  const [queryClient] = useState(() => new QueryClient())
  const i18nProps = {
    locale,
    messages,
    timeZone
  }

  return (
    <NextIntlClientProvider {...i18nProps}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" position="top" />
      </QueryClientProvider>
    </NextIntlClientProvider>
  )
}
