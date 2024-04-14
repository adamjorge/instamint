"use client"

import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { fetchNfts } from "@/lib/query/nfts/search"
import NftCard from "@/components/custom/nfts/nft-card"

export default function SearchPage() {
  const queryString = useSearchParams()
  const search = queryString.get("search")
  const { isPending, data } = useQuery({
    queryKey: ["search", search],
    queryFn: () => fetchNfts(search as string)
  })

  if (!search) {
    return (
      <div>
        <p>Welcome to your search page. This is where you can search for NFTs or minters.</p>
      </div>
    )
  }

  if (isPending) {
    return <div>Loading...</div>
  }

  if (!data || data.length === 0) {
    return <div>No results found for: {search}</div>
  }

  return (
    <div>
      <p>Search results for: {search}</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data.map((nft) => (
          <NftCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  )
}
