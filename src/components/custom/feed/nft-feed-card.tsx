import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import LinkButton from "@/components/ui/custom/link-button"
import type { NftFeedType } from "@/validators/schemas/nfts/feedSchema"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { FaRegComment } from "react-icons/fa6"
import { LuHeart, LuSend } from "react-icons/lu"

export default function NftFeedCard(props: NftFeedCardProps) {
  const { nft, iconSize, handleClickOnWIP } = props
  const t = useTranslations("global")

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
            <LuHeart size={iconSize} onClick={handleClickOnWIP} aria-label="like" />
            <FaRegComment size={iconSize} onClick={handleClickOnWIP} aria-label="comment" />
            <LuSend size={iconSize} onClick={handleClickOnWIP} aria-label="share" />
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
  handleClickOnWIP: () => void
}
