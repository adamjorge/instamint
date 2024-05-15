import { searchMinters } from "@/lib/query/minters/search"
import { searchNfts } from "@/lib/query/nfts/search"
import SearchUrlBuilder from "@/lib/query/search/search-url-builder"
import { searchTeaBags } from "@/lib/query/teabags/search"
import { MinterSearchMintersSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { NftSearchNftsSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { searchSchema } from "@/validators/schemas/search/searchSchema"
import { TeabagsSearchTeabagsSchemaType } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"
import { SearchType } from "@/validators/types/searchType"
import axios, { isAxiosError } from "axios"

export async function fetchSearch(searchParameters: SearchParameters) {
  const { searchTerm, minPrice, maxPrice, currentUserId } = searchParameters

  if (!currentUserId) {
    throw new Error("Missing currentUserId parameter")
  }

  if (searchTerm === "") {
    return { nfts: [], minters: [], teabags: [] }
  }

  try {
    const builder = new SearchUrlBuilder("/api/search/nfts").setSearchTerm(searchTerm)
    const nftUrlBuilder = builder.setMaxPrice(maxPrice).setMinPrice(minPrice)
    const nfts = await axios.get<NftSearchNftsSchemaType>(nftUrlBuilder.build())
    const minterUrlBuilder = builder
      .setBaseUrl("/api/search/minters")
      .setMinPrice("")
      .setMaxPrice("")
      .setCurrentUserId(currentUserId.toString())
    const minters = await axios.get<MinterSearchMintersSchemaType>(minterUrlBuilder.build())
    const teabagUrlBuilder = builder
      .setBaseUrl("/api/search/teabags")
      .setMinPrice("")
      .setMaxPrice("")
    const teabags = await axios.get<TeabagsSearchTeabagsSchemaType>(teabagUrlBuilder.build())

    return searchSchema.parse({
      nfts: nfts.data,
      minters: minters.data,
      teabags: teabags.data
    })
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.message)
    }

    throw new Error(err as string)
  }
}

export async function searchByType(options: SearchOptions) {
  const { type, searchTerm, minPrice, maxPrice, currentUserId } = options

  switch (type) {
    case "nfts":
      return await searchNfts({ search: searchTerm, minPrice, maxPrice })

    case "minters":
      if (!currentUserId) {
        throw new Error("Missing currentUserId parameter")
      }

      return await searchMinters(searchTerm, currentUserId)

    case "teabags":
      return await searchTeaBags(searchTerm)

    default:
      throw new Error("Invalid type")
  }
}

type SearchParameters = {
  searchTerm: string
  minPrice: string
  maxPrice: string
  currentUserId: string | undefined
}

type SearchOptions = SearchParameters & {
  type: SearchType
}
