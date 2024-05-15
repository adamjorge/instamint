import FeedList from "@/components/custom/feed/feed-list"
import { NftFeedType } from "@/validators/schemas/nfts/feedSchema"
import { describe, expect, it } from "@jest/globals"
import type { InfiniteData } from "@tanstack/react-query"
import { render } from "@testing-library/react"
import { IntlProvider } from "next-intl"

import language from "../../locales/en.json"
import mockedFeedResult from "./feed-list-mock-response.json"

describe("feed list displays expected content", () => {
  it("should render feed list expected content", () => {
    const fakeHasNextPage = true
    const fakeFyp = true
    const fakeIconSize = 25
    const { data } = mockedFeedResult
    const infiniteData: InfiniteData<Array<NftFeedType>> = {
      pages: [data],
      pageParams: []
    }
    const feedListProps = {
      hasNextPage: fakeHasNextPage,
      fyp: fakeFyp,
      data: infiniteData,
      iconSize: fakeIconSize,
      handleClickOnFypButton: () => null
    }
    const { getByText, getByLabelText } = render(
      <IntlProvider messages={language} locale="en">
        <FeedList {...feedListProps} />
      </IntlProvider>
    )

    expect(getByText("2021-09-01", { exact: false })).toBeDefined()
    expect(getByLabelText("like")).toBeDefined()
    expect(getByLabelText("comment")).toBeDefined()
    expect(getByLabelText("share")).toBeDefined()
  })
})
