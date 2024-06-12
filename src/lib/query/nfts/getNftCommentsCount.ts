import { CommentListType } from "@/validators/schemas/nfts/comments/commentSchema"

export default function getNftCommentsCount(comments: CommentListType): number {
  const flatComments = comments.flatMap((comment) => [comment, ...comment.children])

  return flatComments.length
}
