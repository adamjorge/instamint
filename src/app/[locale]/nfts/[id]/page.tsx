"use client"

import CommentSection from "@/components/custom/comment-section/comment-section"
import fetchNft from "@/lib/query/nfts/fetchNft"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function NftPage({ params }: { params: { id: number } }) {
  const t = useTranslations("global")
  const { id } = params
  const { data, error, isPending } = useQuery({
    queryKey: ["nfts", id],
    queryFn: () => fetchNft(id)
  })

  if (isPending) {
    return <div className="text-center">{t("loading")}</div>
  }

  if (error) {
    return <div className="text-center">{t("error")}</div>
  }

  return (
    <div className="m-8 mb-24">
      <h1 className="text-center">NFT ID {data.id}</h1>
      <Image src={data.imageUrl} alt={data.id.toString()} width={400} height={400} />
      <div className="my-4">
        <p>{data.description}</p>
        <p>Price: {data.price}</p>
        <p>Location: {data.location}</p>
        <p>Created At: {data.createdAt.toString()}</p>
      </div>
      <div>
        <CommentSection nftId={data.id} />
      </div>
    </div>
  )
}
