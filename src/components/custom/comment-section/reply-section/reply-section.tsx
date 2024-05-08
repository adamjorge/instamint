import ReplyButton from "@/components/custom/comment-section/reply-section/reply-button"
import AddCommentTextarea from "@/components/custom/nfts/add-comment-textarea"
import { Button } from "@/components/ui/button"
import useNftCommentHandler from "@/hooks/useNftCommentHandler"

export default function ReplySection({ nftId, parentId }: ReplySectionProps) {
  const { isReplying, handleReplyChange, reply, replyCount, submitComment, toggleReply } =
    useNftCommentHandler(nftId, parentId)

  return (
    <div>
      <ReplyButton content={isReplying ? "Cancel" : "Reply"} onClick={toggleReply} />
      {isReplying && (
        <div className="mt-4 space-y-2">
          <AddCommentTextarea
            value={reply}
            placeholder="Reply..."
            count={replyCount}
            onChange={handleReplyChange}
          />
          <Button size="sm" onClick={submitComment} type="submit">
            Submit
          </Button>
        </div>
      )}
    </div>
  )
}

type ReplySectionProps = {
  nftId: number
  parentId: number
}
