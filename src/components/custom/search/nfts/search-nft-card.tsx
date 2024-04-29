import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { NftSearchNftSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"

export default function SearchNftCard(nft: NftSearchNftSchemaType) {
  return (
    <Card className="bg-muted m-4">
      <CardHeader>
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
        {nft.location && <p className="text-sm text-muted-foreground">Location: {nft.location}</p>}
        <p>
          Price: <span className="font-bold text-lg">${nft.price.toString()}</span>
        </p>
      </CardContent>
    </Card>
  )
}
