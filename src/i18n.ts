import { type Locale, locales } from "@/config/i18n/locales"
import { MessageSchema } from "@/validators/schemas/translation/messageSchema"
import { getRequestConfig } from "next-intl/server"
import { redirect } from "next/navigation"

export default getRequestConfig(async ({ locale }: { locale: Locale }) => {
  if (!locales.includes(locale)) {
    redirect("/not-found")
  }

  const messages = MessageSchema.parse(await import(`../locales/${locale}.json`))

  return {
    timeZone: "UTC",
    messages
  }
})
