"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { followMinter } from "@/lib/query/minters/follow"
import { MinterSearchMinterSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { useMutation } from "@tanstack/react-query"
import { clsx } from "clsx"
import Image from "next/image"
import { useCallback, useState } from "react"
import { AiOutlineCheck } from "react-icons/ai"

export default function MinterCard(minter: MinterSearchMinterSchemaType) {
  const [isFollowed, setIsFollowed] = useState(minter.isFollowed)
  const mutation = useMutation({
    mutationFn: () => followMinter()
  })
  const handleClickOnFollow = useCallback(() => {
    mutation.mutate()
    setIsFollowed(!isFollowed)
  }, [isFollowed, mutation])

  return (
    <Card className="bg-muted ml-2 mr-5 md:mr-2 xl:mr-3">
      <CardHeader className="flex flex-col space-y-5">
        <Image
          className="self-center"
          src={minter.avatarUrl}
          alt={`Minter ${minter.id.toString()}`}
          width={400}
          height={400}
        />
        <CardTitle className="text-xl">@{minter.username}</CardTitle>
        <CardDescription>{minter.bio}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className={clsx({ "bg-medium": isFollowed })} onClick={handleClickOnFollow}>
          {isFollowed ? (
            <div className="flex space-x-1">
              <span>Followed</span>
              <AiOutlineCheck className="mt-1" />
            </div>
          ) : (
            <span>Follow</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
