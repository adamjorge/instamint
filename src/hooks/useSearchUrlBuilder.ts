import SearchUrlBuilder from "@/lib/utils/searchUrlBuilder"
import { useCallback, useState } from "react"

export default function useSearchUrlBuilder(baseUrl: string) {
  const [searchTerm, setSearchTerm] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const build = useCallback(() => {
    const builder = new SearchUrlBuilder(baseUrl)
      .setSearchTerm(searchTerm)
      .setMinPrice(minPrice)
      .setMaxPrice(maxPrice)

    return builder.build()
  }, [baseUrl, searchTerm, minPrice, maxPrice])

  return { searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice, build }
}
