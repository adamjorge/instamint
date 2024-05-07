"use client"

import SearchResults from "@/components/custom/search/search-results"
import { fetchSearch } from "@/lib/query/search/search"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const queryString = useSearchParams()
  const t = useTranslations("global")
  const search = queryString.get("search") || ""
  const minPrice = queryString.get("min") || ""
  const maxPrice = queryString.get("max") || ""
  const { error, isPending, data } = useQuery({
    queryKey: ["search", search, minPrice, maxPrice],
    queryFn: () => fetchSearch(search, minPrice, maxPrice)
  })

  if (!search) {
    return (
      <div className="text-center">
        <p>{t("searchWelcome")}</p>
      </div>
    )
  }

  if (isPending) {
    return <div className="text-center">{t("loading")}</div>
  }

  if (error) {
    return <div className="text-center">{t("error")}</div>
  }

  return (
    <div className="mb-24">
      <SearchResults search={search} results={data} />
    </div>
  )
}
