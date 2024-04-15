"use client"

import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { fetchNfts } from "@/lib/query/nfts/search"
import NftCard from "@/components/custom/nfts/nft-card"

export default function SearchPage() {
  const queryString = useSearchParams()
  const search = queryString.get("search")
  const { error, isPending, data } = useQuery({
    queryKey: ["search", search],
    queryFn: () => fetchNfts(search)
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

  if (data.length === 0) {
    return <div className="text-center">No results found for: {search}</div>
  }

  return (
    <div className="text-center my-4">
      <p>Search results for: {search}</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data.map((nft) => (
          <NftCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  )
}
