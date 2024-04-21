"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import React, { useCallback, useEffect } from "react"
import SearchDrawer, { SearchDrawerProps } from "@/components/custom/search/drawer/search-drawer"
import useSearchUrlBuilder from "@/hooks/useSearchUrlBuilder"

export default function SearchWrapper({ isOpen, setIsOpen }: SearchWrapperProps) {
  const router = useRouter()
  const locale = useLocale()
  const { searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice, build } =
    useSearchUrlBuilder(`/${locale}/search`)
  const handleSearchSubmit = useCallback(() => {
    setIsOpen(false)
    router.push(build())
  }, [build, setIsOpen, router])
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearchSubmit()
      }
    },
    [handleSearchSubmit]
  )
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("")
      setMinPrice("")
      setMaxPrice("")
    }
  }, [isOpen, setSearchTerm, setMinPrice, setMaxPrice])
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
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
