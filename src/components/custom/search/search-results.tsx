"use client"

import MinterList from "@/components/custom/minters/minter-list"
import SearchNftList from "@/components/custom/nfts/nft-list"
import TeaBagList from "@/components/custom/teabags/teabag-list"
import { SearchSchemaType } from "@/validators/schemas/search/searchSchema"
import type { Session } from "next-auth"
import { useTranslations } from "next-intl"

export default function SearchResults({ search, results, session }: SearchResultsProps) {
  const t = useTranslations("global")

  return (
    <div className="my-4 flex flex-col space-y-10">
      <p className="text-center">{`${t("resultsFor")} ${search}`}</p>
      <SearchNftList nfts={results.nfts} />
      <MinterList minters={results.minters} session={session} />
      <TeaBagList teabags={results.teabags} />
    </div>
  )
}

type SearchResultsProps = {
  search: string
  results: SearchSchemaType
  session: Session
}
