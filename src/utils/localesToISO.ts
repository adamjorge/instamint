import { Locale } from "@/config/i18n/locales"

export function localesToISO(locale: Locale) {
  switch (locale) {
    case "en":
      return "GB"

    case "es":
      return "ES"

    case "fr":
      return "FR"

    case "ja":
      return "JP"

    case "pt":
      return "PT"

    case "zh":
      return "CN"

    default:
      return "GB"
  }
}
