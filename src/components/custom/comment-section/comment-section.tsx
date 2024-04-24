import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Comment from "@/components/custom/comment-section/comment"
import fetchNftComments from "@/lib/query/nfts/fetchNftComments"
import { useQuery } from "@tanstack/react-query"
import { useCallback, useEffect, useState } from "react"

export default function CommentSection({ nftId }: { nftId: number }) {
  const [showAllComments, setShowAllComments] = useState(false)
  const [numDisplayedComments, setNumDisplayedComments] = useState(0)
  const { data, error, isPending } = useQuery({
    queryKey: ["nfts-comments", nftId],
    queryFn: () => fetchNftComments(nftId)
  })
  const handleShowMore = useCallback(() => {
    setShowAllComments(!showAllComments)
    setNumDisplayedComments(20)
  }, [showAllComments])
  useEffect(() => {
    if (!showAllComments) {
      setNumDisplayedComments(0)
    }
  }, [showAllComments])

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error {error.message}</div>
  }

  const visibleComments = showAllComments ? data.slice(0, numDisplayedComments) : []

  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="grid gap-6">
          <h2 className="font-semibold text-xl">{data.length} Comments</h2>
          <Collapsible className="space-y-4">
            <CollapsibleContent className="space-y-4">
              {visibleComments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </CollapsibleContent>
            <CollapsibleTrigger asChild>
              <Button size="sm" variant="ghost" onClick={handleShowMore}>
                {showAllComments ? "Show less" : "Show more"} comments
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}
