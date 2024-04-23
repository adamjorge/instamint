import { locales } from "@/config/i18n/locales"
import { auth } from "@/lib/auth"
import createIntlMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(request: NextRequest) {
  const session = await auth()

  if (!session?.user) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (!request.nextUrl.pathname.startsWith("/admin")) {
    const defaultLocale = "en"
    const handleI18nRouting = createIntlMiddleware({
      locales,
      defaultLocale
    })
    const res = handleI18nRouting(request)

    return res
  }

  return null
}

export const config = {
  matcher: ["/", "/(en|es|fr|ja|pt|zh)/:path*", "/admin/:path*"]
}
