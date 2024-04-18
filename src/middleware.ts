import { locales } from "@/config/i18n/locales"
import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales,
  defaultLocale: "en"
})

export const config = {
  matcher: ["/", "/(en|es|fr|ja|pt|zh)/:path*"]
}
