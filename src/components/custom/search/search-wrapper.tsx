"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import React, { useCallback, useState } from "react"
import SearchDrawer from "./search-drawer"

export default function SearchWrapper({ setIsOpen }: SearchWrapperProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
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
  const SearchDrawerProps = {
    searchTerm,
    setSearchTerm,
    handleSearchSubmit,
    handleKeyDown,
  }

  return (<SearchDrawer {...SearchDrawerProps} />)
}

type SearchWrapperProps = {
  setIsOpen: (isOpen: boolean) => void
}
