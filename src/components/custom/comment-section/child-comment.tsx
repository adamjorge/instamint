import { Avatar, AvatarImage } from "@/components/ui/avatar"
import useRelativeTime from "@/hooks/useRelativeTime"
import { ChildCommentType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function ChildComment({ comment, username }: ChildCommentProps) {
  const relativeTime = useRelativeTime(comment.createdAt)

  return (
    <div className="flex">
      <Avatar className="mr-3">
        <AvatarImage alt="User Avatar" src="/flags/en.svg" />
      </Avatar>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
          @{username}
          <div className="text-gray-500 text-xs dark:text-gray-400">{relativeTime}</div>
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
          {comment.content}
        </p>
      </div>
    </div>
  )
}

type ChildCommentProps = {
  comment: ChildCommentType
  username: string
}
