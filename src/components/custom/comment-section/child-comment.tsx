import CommentAvatar from "@/components/custom/comment-section/comment-avatar"
import CommentDetails from "@/components/custom/comment-section/comment-details"
import { ChildCommentType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function ChildComment({ comment, nftId, parentId }: ChildCommentProps) {
  return (
    <div className="flex">
      <CommentAvatar author={comment.author} />
      <CommentDetails comment={comment} nftId={nftId} parentId={parentId} />
    </div>
  )
}

type ChildCommentProps = {
  comment: ChildCommentType
  nftId: number
  parentId: number
}
