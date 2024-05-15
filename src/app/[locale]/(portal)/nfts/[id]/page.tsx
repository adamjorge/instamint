"use client"

import NftDetails from "@/components/custom/nfts/nft-details"
import Spinner from "@/components/custom/spinner"
import fetchNft from "@/lib/query/nfts/fetchNft"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"

export default function NftPage({ params }: { params: { id: number } }) {
  const t = useTranslations("global")
  const { id } = params
  const { data, error, isPending } = useQuery({
    queryKey: ["nfts", id],
    queryFn: () => fetchNft(id)
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <div className="text-center">{t("error")}</div>
  }

  return (
    <div className="m-8 mb-24">
      <NftDetails nft={data} />
    </div>
  )
}
