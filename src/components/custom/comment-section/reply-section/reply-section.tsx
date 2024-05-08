import ReplyButton from "@/components/custom/comment-section/reply-section/reply-button"
import ReplyTextArea from "@/components/custom/comment-section/reply-section/reply-textarea"
import { Button } from "@/components/ui/button"
import useNftCommentHandler from "@/hooks/useNftCommentHandler"

export default function ReplySection({ nftId, parentId }: ReplySectionProps) {
  const { isReplying, handleReplyChange, reply, submitComment, toggleReply } = useNftCommentHandler(
    nftId,
    parentId
  )

  return (
    <div>
      <ReplyButton content={isReplying ? "Cancel" : "Reply"} onClick={toggleReply} />
      {isReplying && (
        <div className="mt-4 space-y-2">
          <ReplyTextArea value={reply} onChange={handleReplyChange} />
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
