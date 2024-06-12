import { fetchNftsFeed } from "@/lib/query/nfts/fetchNftsFeed"
import { useInfiniteQuery } from "@tanstack/react-query"

export function useInfiniteScroll(fyp: boolean, minterId?: number) {
  const { data, error, isPending, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["feed", fyp],
      queryFn: async ({ pageParam }: { pageParam: number }) => {
        const cursor = pageParam === 0 ? 0 : Math.floor(pageParam / 5) + 1

        if (fyp) {
          return await fetchNftsFeed(cursor)
        }

        return await fetchNftsFeed(cursor, minterId)
      },
      initialPageParam: 0,
      getNextPageParam: (allPages) => {
        const nextPage = allPages.length / 5

        return nextPage
      }
    })

  return { data, error, isPending, isFetchingNextPage, fetchNextPage, hasNextPage }
}
