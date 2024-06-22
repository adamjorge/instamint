"use client"

import SearchResults from "@/components/custom/search/search-results"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { fetchSearch } from "@/lib/query/client/search/fetchSearch"
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
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={t("error")} />
  }

  const resultProps = {
    search,
    results: data,
    session,
    minterId: currentUserId
  }

  return (
    <div className="mb-24">
      <SearchResults {...resultProps} />
    </div>
  )
}
