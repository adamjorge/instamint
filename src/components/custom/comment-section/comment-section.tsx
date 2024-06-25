import Comment from "@/components/custom/comment-section/comment"
import Spinner from "@/components/custom/spinner"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import ErrorMessage from "@/components/ui/custom/error-message"
import fetchNftComments from "@/lib/query/client/nfts/fetchNftComments"
import getNftCommentsCount from "@/lib/utils/getNftCommentsCount"
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
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const commentsCount = getNftCommentsCount(data)
  const visibleComments = showAllComments ? data.slice(0, numDisplayedComments) : []

  return (
    <div className="mb-4">
      <div className="prose prose-gray mx-auto dark:prose-invert">
        <div className="grid gap-6">
          <h2 className="font-semibold text-xl">{commentsCount} Comments</h2>
          {data.length > 0 && (
            <Collapsible className="space-y-4">
              <CollapsibleContent className="space-y-4">
                {visibleComments.map((comment) => (
                  <Comment key={comment.id} nftId={nftId} comment={comment} />
                ))}
              </CollapsibleContent>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost" onClick={handleShowMore}>
                  {showAllComments ? "Show less" : "Show more"} comments
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          )}
        </div>
      </div>
    </div>
  )
}
