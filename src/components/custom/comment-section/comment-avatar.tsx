import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MinterType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function CommentAvatar({ author }: { author: MinterType }) {
  const authorAbbr = author.username.slice(0, 2).toUpperCase()

  return (
    <Avatar className="mr-3">
      <AvatarImage alt={author.id.toString()} src={author.avatarUrl} />
      <AvatarFallback>{authorAbbr}</AvatarFallback>
    </Avatar>
  )
}
