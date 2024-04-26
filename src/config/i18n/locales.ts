export const locales = ["en", "es", "fr", "ja", "pt", "zh"]

export const [defaultLocale] = locales

export type Locale = (typeof locales)[number]
