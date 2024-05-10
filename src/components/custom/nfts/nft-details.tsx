import CommentSection from "@/components/custom/comment-section/comment-section"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/config/i18n/locales"
import useRelativeTime from "@/hooks/useRelativeTime"
import { NftType } from "@/validators/schemas/nfts/nftSchema"
import Image from "next/image"

export default function NftDetails({ nft }: NftDetailsProps) {
  const relativeTime = useRelativeTime(nft.createdAt)

  return (
    <div>
      <h1 className="text-center">NFT ID {nft.id}</h1>
      <Image src={nft.imageUrl} alt={nft.id.toString()} width={400} height={400} />
      <div className="my-4 space-y-4">
        <p>{nft.description}</p>
        <p>Price: ${nft.price}</p>
        <p>Location: {nft.location}</p>
        <p>Published {relativeTime}</p>
      </div>
      <div className="flex flex-wrap items-center mb-6">
        {nft.hashtags.map((hashtag) => (
          <Link href={`/search?search=${hashtag.name}`} key={hashtag.id}>
            <Badge key={hashtag.id} className="mr-2 mb-2" variant="secondary">
              #{hashtag.name}
            </Badge>
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <CommentSection nftId={nft.id} />
      </div>
    </div>
  )
}

type NftDetailsProps = {
  nft: NftType
}
