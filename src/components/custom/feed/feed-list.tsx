import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { NftFeedType } from "@/validators/schemas/nfts/feedSchema"
import type { InfiniteData } from "@tanstack/react-query"
import Image from "next/image"
import { useEffect } from "react"
import { FaExchangeAlt } from "react-icons/fa"
import { FaRegComment } from "react-icons/fa6"
import { LuHeart, LuSend } from "react-icons/lu"
import { useInView } from "react-intersection-observer"

export default function FeedList(props: FeedListProps) {
  const { handleScroll, hasNextPage, fyp, data, iconSize, handleClickOnFypButton } = props
  const { ref, inView } = useInView()

  useEffect(() => {
    const scroll = async () => {
      if (inView && hasNextPage) {
        await handleScroll()
      }
    }

    scroll().catch((error: unknown) => <>{error}</>)
  }, [inView, hasNextPage, handleScroll])

  return (
    <div className="flex flex-col w-full space-y-16 items-center mt-10 pb-32">
      {data.pages.flatMap((page) =>
        page.map((nft) => (
          <Card ref={ref} key={nft.id} className="border-x-0">
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
                <h3 className="text-sm text-medium justify-self-end">
                  {nft.createdAt.slice(0, 10)}
                </h3>
              </div>
            </CardFooter>
          </Card>
        ))
      )}
      <Button
        className="fixed bottom-24 left-10 flex space-x-3 p-3 text-black bg-low border hover:bg-low hover:scale-105 transition-transform ease-in-out rounded-2xl shadow-2xl"
        onClick={handleClickOnFypButton}
      >
        <h3 className="text-base">{fyp ? "For you" : "Followed"}</h3> <FaExchangeAlt />
      </Button>
    </div>
  )
}

type FeedListProps = {
  handleScroll: () => Promise<void>
  hasNextPage: boolean
  fyp: boolean
  data: InfiniteData<Array<NftFeedType>>
  iconSize: number
  handleClickOnFypButton: () => void
}
