import ReplySection from "@/components/custom/comment-section/reply-section/reply-section"
import useRelativeTime from "@/hooks/useRelativeTime"
import { ChildCommentType, CommentType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function CommentDetails({ comment, nftId, parentId }: CommentDetailsProps) {
  const relativeTime = useRelativeTime(comment.createdAt)

  return (
    <div>
      <h3 className="text-sm font-semibold mb-1">
        @{comment.author.username}
        <div className="text-xs">{relativeTime}</div>
      </h3>
      <p className="text-md leading-relaxed">{comment.content}</p>
      <ReplySection nftId={nftId} parentId={parentId} />
    </div>
  )
}

type CommentDetailsProps = {
  comment: CommentType | ChildCommentType
  nftId: number
  parentId: number
}
