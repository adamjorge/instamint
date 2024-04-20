"use client"

import NftCard from "@/components/custom/nfts/nft-card"
import { fetchNfts } from "@/lib/query/nfts/search"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { useTranslations } from "use-intl"

export default function SearchPage() {
  const queryString = useSearchParams()
  const t = useTranslations("global")
  const search = queryString.get("search")
  const { error, isPending, data } = useQuery({
    queryKey: ["search", search],
    queryFn: () => fetchNfts(search)
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

  if (data.length === 0) {
    return <div className="text-center">{`${t("noResultsFor")} ${search}`}</div>
  }

  return (
    <div className="text-center my-4">
      <p>{`${t("resultsFor")} ${search}`}</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data.map((nft) => (
          <NftCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  )
}
