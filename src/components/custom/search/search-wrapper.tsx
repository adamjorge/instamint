"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import React, { useCallback } from "react"
import SearchDrawer, { SearchDrawerProps } from "@/components/custom/search/drawer/search-drawer"
import useSearchUrlBuilder from "@/hooks/useSearchUrlBuilder"

export default function SearchWrapper({ setIsOpen }: SearchWrapperProps) {
  const router = useRouter()
  const locale = useLocale()
  const { searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice, build } =
    useSearchUrlBuilder(`/${locale}/search`)
  const handleSearchSubmit = useCallback(() => {
    setIsOpen(false)
    router.push(build())
  }, [setIsOpen, router, build])
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearchSubmit()
      }
    },
    [handleSearchSubmit]
  )
  const searchDrawerProps: SearchDrawerProps = {
    searchTerm,
    setSearchTerm,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    handleSearchSubmit,
    handleKeyDown
  }

  return <SearchDrawer {...searchDrawerProps} />
}

type SearchWrapperProps = {
  setIsOpen: (isOpen: boolean) => void
}
