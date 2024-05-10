"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { fetchNftsFeed } from "@/lib/query/nfts/fetchNftsFeed"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { FaRegComment } from "react-icons/fa6"
import { LuHeart, LuSend } from "react-icons/lu"

export default function Feed() {
  const t = useTranslations("global")
  const iconSize = 25
  const { data, error, isPending } = useQuery({
    queryKey: ["feed"],
    queryFn: () => fetchNftsFeed()
  })

  if (isPending) {
    return <div className="text-center">{t("loading")}</div>
  }

  if (error) {
    return <div className="text-center">{t("error")}</div>
  }

  return (
    <div className="flex flex-col w-full space-y-16 items-center mt-10 pb-32">
      {data.map((nft) => (
        <Card key={nft.id}>
          <CardHeader>
            <h2 className="text-lg font-semibold">{nft.originalContent.minter.username}</h2>
            <h3 className="text-sm text-medium">{nft.location}</h3>
          </CardHeader>
          <CardContent>
            <Image src={nft.imageUrl} alt={nft.description} width={400} height={400} />
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <div className="flex space-x-3">
                <LuHeart size={iconSize} />
                <FaRegComment size={iconSize} />
                <LuSend size={iconSize} />
              </div>
              <h3 className="text-sm text-medium justify-self-end">{nft.createdAt.slice(0, 10)}</h3>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
