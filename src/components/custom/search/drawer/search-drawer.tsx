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
import { useTranslations } from "next-intl"
import React from "react"
import SearchDrawerInputList, {
  SearchDrawerInputListProps
} from "@/components/custom/search/drawer/search-drawer-input-list"

export default function SearchDrawer({ ...props }: SearchDrawerProps) {
  const searchDrawerInputListProps: Omit<SearchDrawerInputListProps, "handleSearchSubmit"> = props
  const t = useTranslations("search")

  return (
    <DrawerContent className="bg-light dark:bg-gray-200 dark:text-gray-800">
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{t("search")}</DrawerTitle>
          <DrawerDescription>{t("searchPlaceholder")}</DrawerDescription>
        </DrawerHeader>
        <SearchDrawerInputList {...searchDrawerInputListProps} />
        <DrawerFooter>
          <div className="flex flex-col items-center">
            <Button onClick={props.handleSearchSubmit}>{t("submit")}</Button>
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

export type SearchDrawerProps = {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  handleSearchSubmit: () => void
  handleKeyDown: (e: React.KeyboardEvent) => void
  minPrice: string
  setMinPrice: (minPrice: string) => void
  maxPrice: string
  setMaxPrice: (maxPrice: string) => void
}
