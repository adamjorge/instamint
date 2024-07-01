"use client"

import MinterSearchList from "@/components/custom/minters/minter-search-list"
import SearchSearchNftList from "@/components/custom/nfts/nft-search-list"
import TeaBagSearchList from "@/components/custom/teabags/teabag-search-list"
import { SearchSchemaType } from "@/validators/schemas/search/searchSchema"
import { useTranslations } from "next-intl"

export default function SearchResults(props: SearchResultsProps) {
  const { search, results, minterId } = props
  const t = useTranslations("global")

  return (
    <div className="py-10 flex flex-col space-y-10">
      <p className="text-center">{`${t("resultsFor")} ${search}`}</p>
      <SearchSearchNftList nfts={results.nfts} minterId={minterId} />
      <MinterSearchList minters={results.minters} minterId={minterId} />
      <TeaBagSearchList teabags={results.teabags} />
    </div>
  )
}

type SearchResultsProps = {
  search: string
  results: SearchSchemaType
  minterId: number
}
