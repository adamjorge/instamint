"use client"

import MinterSearchCard from "@/components/custom/minters/minter-search-card"
import { follow } from "@/lib/query/client/minters/followAction"
import { unfollow } from "@/lib/query/client/minters/unfollowAction"
import { MinterSearchMinterSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { useMutation } from "@tanstack/react-query"
import { useCallback, useState } from "react"

export default function MinterWrapper({ minter, currentMinterId }: MinterWrapperProps) {
  const [isFollowed, setIsFollowed] = useState(minter.isFollowed)
  const followMutation = useMutation({
    mutationFn: () => follow(currentMinterId.toString(), minter.id.toString()),
    onSuccess: () => {
      setIsFollowed(true)
    }
  })
  const unfollowMutation = useMutation({
    mutationFn: () => unfollow(currentMinterId.toString(), minter.id.toString()),
    onSuccess: () => {
      setIsFollowed(false)
    }
  })
  const handleClickOnFollowButton = useCallback(() => {
    if (isFollowed) {
      unfollowMutation.mutate()

      return
    }

    followMutation.mutate()
  }, [followMutation, unfollowMutation, isFollowed])
  const cardProps = {
    minter,
    isFollowed,
    handleClickOnFollowButton
  }

  return <MinterSearchCard {...cardProps} />
}

type MinterWrapperProps = {
  minter: MinterSearchMinterSchemaType
  currentMinterId: number
}
