import ShareButton from "@/components/custom/feed/share-button"
import LikeHeart from "@/components/custom/like-heart"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import LinkButton from "@/components/ui/custom/link-button"
import type { NftFeedType } from "@/validators/schemas/nfts/feedSchema"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useCallback } from "react"
import { FaRegComment } from "react-icons/fa6"
import { toast } from "sonner"

export default function NftFeedCard(props: NftFeedCardProps) {
  const { nft, iconSize, minterId } = props
  const t = useTranslations("global")
  const handleClickOnWIP = useCallback(() => {
    toast.error("This feature is a work in progress.")
  }, [])
  const isLiked = () => nft.likedBy.some((minter) => minter.id === minterId)

  return (
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
            <LikeHeart isLiked={isLiked()} iconSize={iconSize} nft={nft} minterId={minterId} />
            <FaRegComment size={iconSize} onClick={handleClickOnWIP} aria-label="comment" />
            <ShareButton
              title={nft.originalContent.minter.username}
              text={nft.description}
              url={`/nfts/${nft.id.toString()}`}
            />
          </div>
          <h3 className="text-sm text-medium mt-1">{nft.createdAt.slice(0, 10)}</h3>
          <LinkButton href={`/nfts/${nft.id.toString()}`} className="-mt-2" withLocale>
            {t("moreDetails")}
          </LinkButton>
        </div>
      </CardFooter>
    </Card>
  )
}

type NftFeedCardProps = {
  nft: NftFeedType
  iconSize: number
  minterId: number
}
