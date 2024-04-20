import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { NftSearchNftSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { useTranslations } from "use-intl"

export default function NftCard(nft: NftSearchNftSchemaType) {
  const t = useTranslations("global")

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
        <p>{t("nftPrice", { price: nft.price.toString() })}</p>
      </CardContent>
    </Card>
  )
}
