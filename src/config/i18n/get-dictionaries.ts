import type { Locale } from "@/config/i18n/settings"
import "server-only"

const dictionaries = {
  en: () => import("../../../locales/en.json"),
  es: () => import("../../../locales/es.json"),
  fr: () => import("../../../locales/fr.json")
}

export const getDictionary = (locale: Locale) => dictionaries[locale]()
