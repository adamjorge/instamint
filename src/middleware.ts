import { defaultLocale, locales } from "@/config/i18n/locales"
import { auth } from "@/lib/auth"
import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(request: NextRequest) {
  const session = await auth()

  if (!request.nextUrl.pathname.startsWith("/admin")) {
    const handleI18nRouting = createMiddleware({
      locales,
      defaultLocale
    })
    const res = handleI18nRouting(request)
    const languageFromCookies = request.cookies.get("NEXT_LOCALE")?.value || defaultLocale

    if (!session?.user && !isRedirecting(request.url)) {
      return NextResponse.redirect(new URL(`/${languageFromCookies}/login`, request.url))
    }

    return res
  }

  if (!session?.user.isAdmin) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return null
}

export const config = {
  matcher: ["/", "/(en|es|fr|ja|pt|zh)/:path*", "/admin/:path*"]
}

function isRedirecting(url: string) {
  const routeNames = ["login", "signup", "email"]

  return routeNames.some((name) => url.includes(name))
}
