"use client"

import SearchResults from "@/components/custom/search/search-results"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { fetchSearch } from "@/lib/query/client/search/fetchSearch"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"

export default function SearchView(props: SearchViewProps) {
  const queryString = useSearchParams()
  const t = useTranslations("global")
  const search = queryString.get("search") || ""
  const minPrice = queryString.get("min") || ""
  const maxPrice = queryString.get("max") || ""
  const queryProps = {
    searchTerm: search,
    minPrice,
    maxPrice,
    currentUserId: props.minterId.toString()
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
    minterId: props.minterId
  }

  return (
    <div className="mt-4 mb-24">
      <SearchResults {...resultProps} />
    </div>
  )
}

type SearchViewProps = {
  minterId: number
}
