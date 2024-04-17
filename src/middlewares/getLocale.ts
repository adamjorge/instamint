import { i18n } from "@/config/i18n/settings"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextRequest } from "next/server"

export function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value
  })

  const { locales } = i18n
  const localesCopy = [...locales]
  const negotiator = new Negotiator({ headers: negotiatorHeaders })
  const languages = negotiator.languages(localesCopy)
  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}
