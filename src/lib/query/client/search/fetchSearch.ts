import axiosClient from "@/lib/client"
import { searchMinters } from "@/lib/query/server/minters/search"
import { searchNfts } from "@/lib/query/server/nfts/search"
import { searchTeaBags } from "@/lib/query/server/teabags/search"
import SearchUrlBuilder from "@/lib/utils/searchUrlBuilder"
import { MinterSearchMintersSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { NftSearchNftsSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { searchSchema } from "@/validators/schemas/search/searchSchema"
import { TeabagsSearchTeabagsSchemaType } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"
import type { SearchOptions, SearchParameters } from "@/validators/types/search"

export async function fetchSearch(searchParameters: SearchParameters) {
  const { searchTerm, minPrice, maxPrice, currentUserId } = searchParameters

  if (!currentUserId) {
    throw new Error("Missing currentUserId parameter")
  }

  if (searchTerm === "") {
    return { nfts: [], minters: [], teabags: [] }
  }

  try {
    const builder = new SearchUrlBuilder("/search/nfts").setSearchTerm(searchTerm)
    const nftUrlBuilder = builder.setMaxPrice(maxPrice).setMinPrice(minPrice)
    const nfts = await axiosClient.get<NftSearchNftsSchemaType>(nftUrlBuilder.build())
    const minterUrlBuilder = builder
      .setBaseUrl("/search/minters")
      .setMinPrice("")
      .setMaxPrice("")
      .setCurrentUserId(currentUserId.toString())
    const minters = await axiosClient.get<MinterSearchMintersSchemaType>(minterUrlBuilder.build())
    const teabagUrlBuilder = builder.setBaseUrl("/search/teabags").setMinPrice("").setMaxPrice("")
    const teabags = await axiosClient.get<TeabagsSearchTeabagsSchemaType>(teabagUrlBuilder.build())

    return searchSchema.parse({
      nfts: nfts.data,
      minters: minters.data,
      teabags: teabags.data
    })
  } catch (err) {
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
