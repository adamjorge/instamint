"use client"

import { Button } from "@/components/ui/button"
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import React, { useCallback, useState } from "react"

export default function SearchDrawer({ setIsOpen }: SearchDrawerProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const t = useTranslations("search")
  const locale = useLocale()
  const handleSearchSubmit = useCallback(() => {
    setIsOpen(false)
    router.push(`${locale}/search?search=${encodeURIComponent(searchTerm)}`)
  }, [searchTerm, setIsOpen, router, locale])
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearchSubmit()
      }
    },
    [handleSearchSubmit]
  )

  return (
    <DrawerContent className="bg-light dark:bg-gray-200 dark:text-gray-800">
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{t("search")}</DrawerTitle>
          <DrawerDescription>{t("searchPlaceholder")}</DrawerDescription>
        </DrawerHeader>
        <div className="flex justify-center">
          <Input
            autoFocus
            type="search"
            placeholder={t("searchPlaceholder")}
            className="mx-5 w-3/4"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <DrawerFooter>
          <div className="flex flex-col items-center">
            <Button onClick={handleSearchSubmit}>{t("submit")}</Button>
            <DrawerClose asChild>
              <Button size="sm" variant="outline" className="w-fit mt-3">
                {t("cancel")}
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </div>
    </DrawerContent>
  )
}

type SearchDrawerProps = {
  setIsOpen: (isOpen: boolean) => void
}
