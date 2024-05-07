import ChildComment from "@/components/custom/comment-section/child-comment"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import useRelativeTime from "@/hooks/useRelativeTime"
import { CommentType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function Comment({ comment }: { comment: CommentType }) {
  const relativeTime = useRelativeTime(comment.createdAt)

  return (
    <div className="space-y-4">
      <div className="flex">
        <Avatar className="mr-3">
          <AvatarImage alt={comment.author.id.toString()} src={comment.author.avatarUrl} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
            @{comment.author.username}
            <div className="text-gray-500 text-xs dark:text-gray-400">{relativeTime}</div>
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
            {comment.content}
          </p>
          {comment.children.length > 0 && (
            <div className="mt-2 ml-4 space-y-4">
              {comment.children.map((child) => (
                <ChildComment key={child.id} comment={child} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
