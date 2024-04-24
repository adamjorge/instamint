import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { CommentType } from "@/validators/schemas/nfts/comments/commentSchema"
import { useFormatter } from "next-intl"

export default function Comment({ comment }: { comment: CommentType }) {
  const formatter = useFormatter()
  const date = new Date(comment.createdAt)
  const relativeTime = formatter.relativeTime(date, { now: new Date() })

  return (
    <div className="text-sm flex items-start gap-4">
      <Avatar className="w-10 h-10 border">
        <AvatarImage alt="@shadcn" src="/flags/en.svg" />
      </Avatar>
      <div className="grid gap-1.5">
        <div className="flex items-center gap-2">
          <div className="font-semibold">@{comment.nft.originalContent.minter.username}</div>
          <div className="text-gray-500 text-xs dark:text-gray-400">{relativeTime}</div>
        </div>
        <div>{comment.content}</div>
      </div>
    </div>
  )
}
