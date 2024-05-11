"use client"

import FeedList from "@/components/custom/feed/feed-list"
import Spinner from "@/components/custom/spinner"
import { fetchNftsFeed } from "@/lib/query/nfts/fetchNftsFeed"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useCallback, useState } from "react"

export default function Feed({ minterId }: { minterId: number }) {
  const t = useTranslations("global")
  const [fyp, setFyp] = useState(true)
  const iconSize = 25
  const { data, error, isPending, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["feed", fyp],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const cursor = Math.floor(pageParam / 5)

      if (fyp) {
        return await fetchNftsFeed(cursor)
      }

      return await fetchNftsFeed(cursor, minterId)
    },
    initialPageParam: 0,
    getNextPageParam: (allPages) => allPages.length + 1
  })
  const handleClickOnFypButton = useCallback(() => {
    setFyp(!fyp)
  }, [fyp])
  const handleScroll = useCallback(async () => {
    await fetchNextPage()
  }, [fetchNextPage])

  if (isPending || isFetching) {
    return <Spinner />
  }

  if (error) {
    return <div className="text-center">{t("error")}</div>
  }

  const feedListProps = {
    handleScroll,
    hasNextPage,
    fyp,
    data,
    iconSize,
    handleClickOnFypButton
  }

  return <FeedList {...feedListProps} />
}
