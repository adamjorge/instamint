import { fallbackLang, languages } from "@/config/i18n/settings"
import acceptLanguage from "accept-language"
import { NextRequest, NextResponse } from "next/server"

acceptLanguage.languages(languages)

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/portal", req.url))
  }

  const lang = acceptLanguage.get(req.cookies.get("lang")?.value) || fallbackLang

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lang}/portal/${req.nextUrl.pathname}`, req.url))
  }

  return NextResponse.next()
}
