import NftFeedCard from "@/components/custom/feed/nft-feed-card"
import { Button } from "@/components/ui/button"
import type { NftFeedType } from "@/validators/schemas/nfts/feedSchema"
import type { InfiniteData } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { FaExchangeAlt } from "react-icons/fa"

export default function FeedList(props: FeedListProps) {
  const { fyp, data, iconSize, handleClickOnFypButton, minterId } = props
  const t = useTranslations("global")

  return (
    <div className="flex flex-col w-full space-y-16 items-center mt-10 pb-32">
      {data.pages.flatMap((page) =>
        page.map((nft) => (
          <NftFeedCard key={nft.id} nft={nft} iconSize={iconSize} minterId={minterId} />
        ))
      )}
      <Button
        className="fixed bottom-24 left-10 flex space-x-3 p-3 text-black bg-white border hover:bg-white hover:scale-105 transition-transform ease-in-out rounded-2xl shadow-2xl"
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
  minterId: number
}
