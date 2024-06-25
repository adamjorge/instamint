export type SearchType = "minters" | "nfts" | "teabags"

export type SearchParameters = {
  searchTerm: string
  minPrice: string
  maxPrice: string
  currentUserId: string | undefined
}

export type SearchOptions = SearchParameters & {
  type: SearchType
}
