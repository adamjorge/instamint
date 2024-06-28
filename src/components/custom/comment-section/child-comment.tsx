import CommentAvatar from "@/components/custom/comment-section/comment-avatar"
import CommentDetails from "@/components/custom/comment-section/comment-details"
import { ChildCommentType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function ChildComment(props: ChildCommentProps) {
  const { comment, nftId, minterId, parentId } = props

  return (
    <article className="flex">
      <CommentAvatar author={comment.author} />
      <CommentDetails comment={comment} nftId={nftId} minterId={minterId} parentId={parentId} />
    </article>
  )
}

type ChildCommentProps = {
  comment: ChildCommentType
  nftId: number
  minterId: number
  parentId: number
}
