import { i18n } from "@/config/i18n/settings"
import { getLocale } from "@/middlewares/getLocale"
import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = new URL(req.url)
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  const locale = getLocale(req)

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`${locale}/portal`, req.url))
  }

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, req.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|manifest.json|instamint.svg|sw.js).*)"]
}
