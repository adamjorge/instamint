import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NftSearchNftSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import Image from "next/image"

export default function NftSearchCard(nft: NftSearchNftSchemaType) {
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
        {nft.location && <p className="text-sm text-muted-foreground">Location: {nft.location}</p>}
        <p>
          Price: <span className="font-bold text-lg">${nft.price.toString()}</span>
        </p>
      </CardContent>
    </Card>
  )
}
