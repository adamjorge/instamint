"use client"

import NftDetails from "@/components/custom/nfts/nft-details"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import fetchNft from "@/lib/query/client/nfts/fetchNft"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"

export function NftWrapper(props: NftWrapperProps) {
  const t = useTranslations("global")
  const { nftId, minterId } = props
  const { data, error, isPending } = useQuery({
    queryKey: ["nfts", nftId],
    queryFn: () => fetchNft(nftId)
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={t("error")} />
  }

  const nftDetailsProps = {
    nft: data,
    minterId
  }

  return (
    <div className="m-8 mb-24">
      <NftDetails {...nftDetailsProps} />
    </div>
  )
}

type NftWrapperProps = {
  nftId: number
  minterId: number
}
