import { SearchSchemaType } from "@/validators/schemas/search/searchSchema"
import MinterList from "../minters/minter-list"
import NftList from "../nfts/nft-list"
import TeaBagList from "../teabags/teabag-list"

export default function SearchResults({ search, results }: SearchResultsProps) {
  return (
    <div className="my-4">
      <p className="text-center">Search results for: {search}</p>
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
