import ChildComment from "@/components/custom/comment-section/child-comment"
import ReplySection from "@/components/custom/comment-section/reply-section/reply-section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import useRelativeTime from "@/hooks/useRelativeTime"
import { CommentType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function Comment({ comment, nftId }: CommentProps) {
  const relativeTime = useRelativeTime(comment.createdAt)
  const authorAbbr = comment.author.username.slice(0, 2).toUpperCase()

  return (
    <div className="space-y-4">
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage alt={comment.author.id.toString()} src={comment.author.avatarUrl} />
          <AvatarFallback>{authorAbbr}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
            @{comment.author.username}
            <div className="text-gray-500 text-xs dark:text-gray-400">{relativeTime}</div>
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
            {comment.content}
          </p>
          <ReplySection nftId={nftId} parentId={comment.id} />
          {comment.children.length > 0 && (
            <div className="mt-2 ml-4 space-y-4">
              {comment.children.map((child) => (
                <ChildComment key={child.id} comment={child} nftId={nftId} parentId={comment.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

type CommentProps = {
  comment: CommentType
  nftId: number
}
