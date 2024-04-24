import MinterList from "@/components/custom/minters/minter-list"
import NftList from "@/components/custom/nfts/nft-list"
import TeaBagList from "@/components/custom/teabags/teabag-list"
import { SearchSchemaType } from "@/validators/schemas/search/searchSchema"
import { useTranslations } from "use-intl"

export default function SearchResults({ search, results }: SearchResultsProps) {
  const t = useTranslations("global")

  return (
    <div className="my-4">
      <p className="text-center">{`${t("resultsFor")} ${search}`}</p>
      <NftList nfts={results.nfts} />
      <MinterList minters={results.minters} />
      <TeaBagList teabags={results.teabags} />
    </div>
  )
}

type SearchResultsProps = {
  search: string
  results: SearchSchemaType
}
