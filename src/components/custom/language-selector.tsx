"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { locales, type Locale } from "@/config/i18n/locales"
import { useLocale } from "next-intl"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useCallback } from "react"

export default function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const handleLocaleChange = useCallback(
    (loc: Locale) => {
      const newPath = pathname.replace(/^\/(en|es|fr|ja|pt|zh)/u, `/${loc}`)
      router.push(newPath)
    },
    [router, pathname]
  )

  return (
    <div>
      <Select
        defaultValue={locale}
        onValueChange={(value) => {
          handleLocaleChange(value)
        }}
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="w-32">
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              <div className="flex">
                <p>{loc.toUpperCase()}</p>
                <Image
                  src={`/flags/${loc}.svg`}
                  alt={loc}
                  width={24}
                  height={10}
                  className="ml-4 border"
                />
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
