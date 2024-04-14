import mockedSearchResult from "./search-mock-response.json"
import { render, waitFor } from "@testing-library/react"
import NftCard from "@/components/custom/nfts/nft-card"
import { searchSchema } from "@/validators/schemas/searchSchema"

describe("Search", () => {
  it("should render nft cards", async () => {
    const nfts = searchSchema.parse(mockedSearchResult).nfts

    for (const nft of nfts) {
      const { getByText, getByAltText } = render(<NftCard {...nft} />)
      expect(getByText(`@${nft.originalContent?.minter?.username}`)).toBeDefined()
      expect(getByText(nft.description)).toBeDefined()

      await waitFor(() => {
        const image = getByAltText(`NFT ${nft.id.toString()}`) as HTMLImageElement
        expect(image).toBeDefined()
        expect.stringContaining(encodeURIComponent(nft.imageUrl))
      })
    }
  })
})
