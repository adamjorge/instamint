"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MinterSearchMinterSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import Image from "next/image"
import { AiOutlineCheck } from "react-icons/ai"

export default function MinterCard(minter: MinterSearchMinterSchemaType) {
  return (
    <Card className="bg-muted m-4">
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
        {minter.isFollowed ? (
          <Button className="bg-dark flex space-x-1">
            <span>Followed</span> <AiOutlineCheck />
          </Button>
        ) : (
          <Button>Follow</Button>
        )}
      </CardFooter>
    </Card>
  )
}
