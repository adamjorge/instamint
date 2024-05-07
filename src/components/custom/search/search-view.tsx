"use client"

import SearchResults from "@/components/custom/search/search-results"
import { fetchSearch } from "@/lib/query/search/search"
import { useQuery } from "@tanstack/react-query"
import type { Session } from "next-auth"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"

export default function SearchView({ session }: { session: Session }) {
  const queryString = useSearchParams()
  const t = useTranslations("global")
  const search = queryString.get("search") || ""
  const minPrice = queryString.get("min") || ""
  const maxPrice = queryString.get("max") || ""
  const currentUserId = session.user.id
  const queryProps = {
    searchTerm: search,
    minPrice,
    maxPrice,
    currentUserId
  }
  const { error, isPending, data } = useQuery({
    queryKey: ["search", search, minPrice, maxPrice],
    queryFn: () => fetchSearch({ ...queryProps })
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

  const resultProps = {
    search,
    results: data,
    session
  }

  return (
    <div className="mb-24">
      <SearchResults {...resultProps} />
    </div>
  )
}
