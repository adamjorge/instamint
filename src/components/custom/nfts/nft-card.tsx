import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { SearchNftSchemaType } from "@/validators/schemas/search/nfts/searchNftSchema"

export default function NftCard(nft: SearchNftSchemaType) {
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
        <CardTitle className="text-xl">@{nft.originalContent?.minter?.username}</CardTitle>
        <CardDescription>{nft.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
