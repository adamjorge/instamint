import ShareButton from "@/components/custom/feed/share-specific-nft-link/share-button"
import LikeHeart from "@/components/custom/like-heart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NftSearchNftSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import Image from "next/image"

export default function NftSearchCard(props: NftSearchCardProps) {
  const { nft, minterId } = props
  const currentMinterId = parseInt(minterId, 10)
  const isLiked = nft.likedBy.some((minter) => minter.id === currentMinterId)

  return (
    <Card className="bg-muted ml-2 mr-5 md:mr-2 xl:mr-3">
      <CardHeader className="flex flex-col space-y-5">
        <Image
          className="self-center"
          src={nft.imageUrl}
          alt={`NFT ${nft.id.toString()}`}
          width={400}
          height={400}
        />
        <CardTitle className="text-xl">@{nft.originalContent.minter.username}</CardTitle>
        <CardDescription>{nft.description}</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <div className="flex justify-between">
          <div className="flex flex-col">
            {nft.location && (
              <p className="text-sm text-muted-foreground">Location: {nft.location}</p>
            )}
            <p>
              Price: <span className="font-bold text-lg">${nft.price.toString()}</span>
            </p>
          </div>
          <ShareButton
            title={nft.originalContent.minter.username}
            text={nft.description}
            url={`/nfts/${nft.id.toString()}`}
          />
          <LikeHeart isLiked={isLiked} iconSize={25} minterId={currentMinterId} nft={nft} />
        </div>
      </CardContent>
    </Card>
  )
}

type NftSearchCardProps = {
  nft: NftSearchNftSchemaType
  minterId: string
}
