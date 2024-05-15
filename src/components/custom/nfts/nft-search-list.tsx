import NftCard from "@/components/custom/nfts/nft-search-card"
import { Link } from "@/config/i18n/locales"
import { NftSearchNftsSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { useTranslations } from "next-intl"

export default function NftSearchList({ nfts }: NftListProps) {
  const t = useTranslations("search")

  return (
    <div className="my-1">
      <h3 className="text-center text-2xl">NFTs</h3>
      {nfts.length === 0 ? (
        <p className="text-center">{t("noSearchResultsFor", { type: "NFTs" })}</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
          {nfts.map((nft) => (
            <Link href={`/nfts/${nft.id.toString()}`} key={nft.id}>
              <NftCard key={nft.id} {...nft} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

type NftListProps = {
  nfts: NftSearchNftsSchemaType
}
