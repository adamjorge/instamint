import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import React from "react"
import SearchPriceInput from "../search-price-input"

export default function SearchDrawerInputList({ ...props }: SearchDrawerInputListProps) {
  const t = useTranslations("search")
  const { searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice, handleKeyDown } =
    props

  return (
    <div className="flex justify-center flex-wrap">
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
      <div className="grid grid-cols-2 my-4">
        <SearchPriceInput
          label={t("minPrice")}
          value={minPrice}
          setValue={setMinPrice}
          placeholder={t("minPrice")}
        />
        <SearchPriceInput
          label={t("maxPrice")}
          value={maxPrice}
          setValue={setMaxPrice}
          placeholder={t("maxPrice")}
        />
      </div>
    </div>
  )
}

export type SearchDrawerInputListProps = {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  minPrice: string
  setMinPrice: (minPrice: string) => void
  maxPrice: string
  setMaxPrice: (maxPrice: string) => void
  handleKeyDown: (e: React.KeyboardEvent) => void
}
