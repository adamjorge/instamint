import { createSharedPathnamesNavigation } from "next-intl/navigation"

export const locales = ["en", "es", "fr", "ja", "pt", "zh"]

export const localePrefix = "always"

export const [defaultLocale] = locales

export type Locale = (typeof locales)[number]

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix
})
