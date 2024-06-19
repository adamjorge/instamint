import { defaultLocale, locales } from "@/config/i18n/locales"
import { auth } from "@/lib/auth"
import createMiddleware from "next-intl/middleware"
import { NextResponse } from "next/server"

export default auth((req) => {
  if (!req.nextUrl.pathname.startsWith("/admin")) {
    const handleI18nRouting = createMiddleware({
      locales,
      defaultLocale
    })
    const res = handleI18nRouting(req)
    const languageFromCookies = req.cookies.get("NEXT_LOCALE")?.value || defaultLocale

    if (!req.auth?.user && !isRedirecting(req.url)) {
      return NextResponse.redirect(new URL(`/${languageFromCookies}/login`, req.url))
    }

    return res
  }

  if (!req.auth?.user.isAdmin) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/", "/(en|es|fr|ja|pt|zh)/:path*", "/login", "/admin/:path*"]
}

function isRedirecting(url: string) {
  const routeNames = [
    "login",
    "signup",
    "email",
    "reset-password",
    "update-password",
    "change-password"
  ]

  return routeNames.some((name) => url.includes(name))
}
