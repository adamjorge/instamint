"use client"

import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { fetchSearch } from "@/lib/query/search/search"
import SearchResults from "@/components/custom/search/search-results"

export default function SearchPage() {
  const queryString = useSearchParams()
  const search = queryString.get("search")
  const { error, isPending, data } = useQuery({
    queryKey: ["search", search],
    queryFn: () => fetchSearch(search)
  })

  if (!search) {
    return (
      <div className="text-center">
        <p>Welcome to your search page. This is where you can search for NFTs or minters.</p>
      </div>
    )
  }

  if (isPending) {
    return <div className="text-center">Loading...</div>
  }

  if (error) {
    return <div className="text-center">An error occurred, please try again later.</div>
  }

  return (
    <div className="mb-24">
      <SearchResults search={search} results={data} />
    </div>
  )
}
