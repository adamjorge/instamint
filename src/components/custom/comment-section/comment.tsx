import ChildComment from "@/components/custom/comment-section/child-comment"
import CommentAvatar from "@/components/custom/comment-section/comment-avatar"
import CommentDetails from "@/components/custom/comment-section/comment-details"
import { CommentType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function Comment({ comment, nftId }: CommentProps) {
  return (
    <div className="flex">
      <CommentAvatar author={comment.author} />
      <div>
        <CommentDetails comment={comment} nftId={nftId} parentId={comment.id} />
        {comment.children.length > 0 && (
          <div className="mt-2 ml-4 space-y-4">
            {comment.children.map((child) => (
              <ChildComment key={child.id} comment={child} nftId={nftId} parentId={comment.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

type CommentProps = {
  comment: CommentType
  nftId: number
}
