import { SearchSchemaType } from "@/validators/schemas/search/searchSchema"
import NftList from "@/components/custom/nfts/nft-list"
import MinterList from "@/components/custom/minters/minter-list"
import TeaBagList from "@/components/custom/teabags/teabag-list"

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
