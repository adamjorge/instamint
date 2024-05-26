"use client"

import FeedList from "@/components/custom/feed/feed-list"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"
import { useTranslations } from "next-intl"
import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function Feed({ minterId }: { minterId: number }) {
  const t = useTranslations("global")
  const { ref, inView } = useInView()
  const [fyp, setFyp] = useState(true)
  const iconSize = 25
  const { data, error, isPending, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteScroll(fyp, minterId)
  const handleClickOnFypButton = useCallback(() => {
    setFyp(!fyp)
  }, [fyp])

  useEffect(() => {
    if (inView && hasNextPage) {
      void fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (isPending || !data) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={t("error")} />
  }

  const feedListProps = {
    hasNextPage,
    fyp,
    data,
    iconSize,
    handleClickOnFypButton
  }

  return (
    <>
      <FeedList {...feedListProps} />
      <div ref={ref} className="pb-80">
        {isFetchingNextPage && <Spinner />}
      </div>
    </>
  )
}
