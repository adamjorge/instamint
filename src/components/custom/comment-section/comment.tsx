import ChildComment from "@/components/custom/comment-section/child-comment"
import CommentAvatar from "@/components/custom/comment-section/comment-avatar"
import CommentDetails from "@/components/custom/comment-section/comment-details"
import { CommentType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function Comment(props: CommentProps) {
  const { comment, nftId, minterId } = props

  return (
    <article className="flex">
      <CommentAvatar author={comment.author} />
      <div>
        <CommentDetails comment={comment} nftId={nftId} minterId={minterId} parentId={comment.id} />
        {comment.children.length > 0 && (
          <div className="mt-2 ml-4 space-y-4">
            {comment.children.map((child) => {
              const childProps = {
                comment: child,
                nftId,
                minterId,
                parentId: comment.id
              }

              return <ChildComment key={child.id} {...childProps} />
            })}
          </div>
        )}
      </div>
    </article>
  )
}

type CommentProps = {
  comment: CommentType
  nftId: number
  minterId: number
}
