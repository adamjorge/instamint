import MinterSearchCard from "@/components/custom/minters/minter-search-card"
import NftSearchCard from "@/components/custom/nfts/nft-search-card"
import TeaBagSearchCard from "@/components/custom/teabags/teabag-search-card"
import { MinterSearchMinterSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { NftSearchNftSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { searchSchema } from "@/validators/schemas/search/searchSchema"
import { describe, expect, it } from "@jest/globals"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, waitFor } from "@testing-library/react"
import { IntlProvider } from "next-intl"

import language from "../../locales/en.json"
import mockedSearchResult from "./search-mock-response.json"

const queryClient = new QueryClient()

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
      const { getByText } = render(<TeaBagSearchCard {...teabag} />)

      expect(getByText(`@${teabag.name}`)).toBeDefined()
      expect(getByText(teabag.bio)).toBeDefined()
    })
  })
})

async function testNftRender(nft: NftSearchNftSchemaType) {
  const { getByText, getByAltText } = render(
    <IntlProvider messages={language} locale="en">
      <QueryClientProvider client={queryClient}>
        <NftSearchCard nft={nft} minterId={"1"} />
      </QueryClientProvider>
    </IntlProvider>
  )

  expect(getByText(`@${nft.originalContent.minter.username}`)).toBeDefined()
  expect(getByText(nft.description)).toBeDefined()

  await waitFor(() => {
    const image = getByAltText(`NFT ${nft.id.toString()}`) as HTMLImageElement
    expect(image).toBeDefined()
    expect(image.src).toContain(encodeURIComponent(nft.imageUrl))
  })
}

async function testMinterRender(minter: MinterSearchMinterSchemaType) {
  const fakeHandleClickOnFollowButton = () => null
  const fakeFollow = true
  const fakeMinter = { ...minter, isFollowed: fakeFollow }
  const { getByText, getByAltText } = render(
    <MinterSearchCard
      minter={fakeMinter}
      handleClickOnFollowButton={fakeHandleClickOnFollowButton}
      {...minter}
    />
  )

  expect(getByText(`@${minter.username}`)).toBeDefined()
  expect(getByText(minter.bio)).toBeDefined()

  await waitFor(() => {
    const image = getByAltText(`Minter ${minter.id.toString()}`) as HTMLImageElement
    expect(image).toBeDefined()
    expect(image.src).toContain(encodeURIComponent(minter.avatarKey))
  })
}
