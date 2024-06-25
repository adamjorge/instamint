import { searchMinters } from "@/lib/query/server/minters/search"
import { searchNfts } from "@/lib/query/server/nfts/search"
import { searchTeaBags } from "@/lib/query/server/teabags/search"
import type { SearchOptions } from "@/validators/types/search"

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
