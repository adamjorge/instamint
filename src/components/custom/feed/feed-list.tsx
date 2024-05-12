import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import LinkButton from "@/components/ui/custom/link-button"
import type { NftFeedType } from "@/validators/schemas/nfts/feedSchema"
import type { InfiniteData } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useCallback } from "react"
import { FaExchangeAlt } from "react-icons/fa"
import { FaRegComment } from "react-icons/fa6"
import { LuHeart, LuSend } from "react-icons/lu"
import { toast } from "sonner"

export default function FeedList(props: FeedListProps) {
  const { fyp, data, iconSize, handleClickOnFypButton } = props
  const t = useTranslations("global")
  const handleClickOnWIP = useCallback(() => {
    toast.error("This feature is a work in progress.")
  }, [])

  return (
    <div className="flex flex-col w-full space-y-16 items-center mt-10 pb-32">
      {data.pages.flatMap((page) =>
        page.map((nft) => (
          <Card key={nft.id} className="border-x-0">
            <CardHeader>
              <h2 className="text-lg font-semibold">{nft.originalContent.minter.username}</h2>
              <h3 className="text-sm text-medium">{nft.location}</h3>
            </CardHeader>
            <CardContent>
              <Image src={nft.imageUrl} alt={nft.description} width={400} height={400} />
            </CardContent>
            <CardFooter>
              <div className="flex justify-evenly w-full">
                <div className="flex space-x-3">
                  <LuHeart size={iconSize} onClick={handleClickOnWIP} />
                  <FaRegComment size={iconSize} onClick={handleClickOnWIP} />
                  <LuSend size={iconSize} onClick={handleClickOnWIP} />
                </div>
                <h3 className="text-sm text-medium mt-1">{nft.createdAt.slice(0, 10)}</h3>
                <LinkButton href={`/nfts/${nft.id.toString()}`} className="-mt-2" withLocale>
                  {t("moreDetails")}
                </LinkButton>
              </div>
            </CardFooter>
          </Card>
        ))
      )}
      <Button
        className="fixed bottom-24 left-10 flex space-x-3 p-3 text-black bg-low border hover:bg-low hover:scale-105 transition-transform ease-in-out rounded-2xl shadow-2xl"
        onClick={handleClickOnFypButton}
      >
        <h3 className="text-base">{fyp ? t("forYouFeed") : t("followedFeed")}</h3> <FaExchangeAlt />
      </Button>
    </div>
  )
}

type FeedListProps = {
  fyp: boolean
  data: InfiniteData<Array<NftFeedType>>
  iconSize: number
  handleClickOnFypButton: () => void
}
