import AddCommentTextarea from "@/components/custom/nfts/add-comment-textarea"
import { Button } from "@/components/ui/button"
import useNftCommentHandler from "@/hooks/useNftCommentHandler"

export default function AddCommentSection({ nftId }: { nftId: number }) {
  const { handleReplyChange, reply, replyCount, submitComment } = useNftCommentHandler(nftId, null)

  return (
    <div>
      <h2 className="font-semibold text-xl">Add a comment</h2>
      <div className="mt-4 space-y-4">
        <AddCommentTextarea
          value={reply}
          placeholder="Write your comment here..."
          count={replyCount}
          onChange={handleReplyChange}
        />
        <Button onClick={submitComment}>Post comment</Button>
      </div>
    </div>
  )
}
