import MinterCard from "@/components/custom/minters/minter-card"
import NftCard from "@/components/custom/nfts/nft-card"
import TeaBagCard from "@/components/custom/teabags/teabag-card"
import { MinterSearchMinterSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { NftSearchNftSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { searchSchema } from "@/validators/schemas/search/searchSchema"
import { describe, expect, it } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import mockedSearchResult from "./search-mock-response.json"

describe("Search", () => {
  it("should render nft cards", async () => {
    const { nfts } = searchSchema.parse(mockedSearchResult)

    await Promise.all(nfts.map((nft) => testNftRender(nft)))
  })

  it("should render minter cards", async () => {
    const { minters } = searchSchema.parse(mockedSearchResult)

    await Promise.all(minters.map((minter) => testMinterRender(minter)))
  })

  it("should render tea bag cards", () => {
    const { teabags } = searchSchema.parse(mockedSearchResult)

    teabags.forEach((teabag) => {
      const { getByText } = render(<TeaBagCard {...teabag} />)

      expect(getByText(`@${teabag.name}`)).toBeDefined()
      expect(getByText(teabag.bio)).toBeDefined()
    })
  })
})

async function testNftRender(nft: NftSearchNftSchemaType) {
  const { getByText, getByAltText } = render(<NftCard {...nft} />)

  expect(getByText(`@${nft.originalContent.minter.username}`)).toBeDefined()
  expect(getByText(nft.description)).toBeDefined()

  await waitFor(() => {
    const image = getByAltText(`NFT ${nft.id.toString()}`) as HTMLImageElement
    expect(image).toBeDefined()
    expect(image.src).toContain(encodeURIComponent(nft.imageUrl))
  })
}

async function testMinterRender(minter: MinterSearchMinterSchemaType) {
  const { getByText, getByAltText } = render(<MinterCard {...minter} />)

  expect(getByText(`@${minter.username}`)).toBeDefined()
  expect(getByText(minter.bio)).toBeDefined()

  await waitFor(() => {
    const image = getByAltText(`Minter ${minter.id.toString()}`) as HTMLImageElement
    expect(image).toBeDefined()
    expect(image.src).toContain(encodeURIComponent(minter.avatarUrl))
  })
}
