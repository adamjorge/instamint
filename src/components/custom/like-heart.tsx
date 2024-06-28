"use client"

import fetchDislikeNft from "@/lib/query/client/nfts/fetchDislikeNft"
import fetchLikeNft from "@/lib/query/client/nfts/fetchLikeNft"
import type { NftFeedType } from "@/validators/schemas/nfts/feedSchema"
import { useMutation } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useCallback, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { toast } from "sonner"

export default function LikeHeart(props: LikeHeartProps) {
  const t = useTranslations("like")
  const { nft, isLiked, iconSize, minterId } = props
  const [liked, setLiked] = useState(isLiked)
  // eslint-disable-next-line no-underscore-dangle
  const [nbLikes, setNbLikes] = useState(nft._count.likedBy)
  const likeMutation = useMutation({
    mutationFn: () => fetchLikeNft(nft.id, minterId),
    onError: () => {
      toast.error(t("likeError"))
    }
  })
  const handleClickOnLike = useCallback(() => {
    setNbLikes(nbLikes + 1)
    setLiked(true)
    likeMutation.mutate()
  }, [likeMutation, nbLikes])
  const dislikeMutation = useMutation({
    mutationFn: () => fetchDislikeNft(nft.id),
    onError: () => {
      toast.error(t("dislikeError"))
    }
  })
  const handleClickOnDislike = useCallback(() => {
    if (nbLikes > 0) {
      setNbLikes(nbLikes - 1)
    }

    setLiked(false)
    dislikeMutation.mutate()
  }, [dislikeMutation, nbLikes])

  return (
    <>
      <span>{nbLikes}</span>
      {liked ? (
        <FaHeart size={iconSize} onClick={handleClickOnDislike} aria-label="like" />
      ) : (
        <FaRegHeart size={iconSize} onClick={handleClickOnLike} aria-label="dislike" />
      )}
    </>
  )
}

type LikeHeartProps = {
  isLiked: boolean
  iconSize: number
  minterId: number
  nft: NftFeedType
}
