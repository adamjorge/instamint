import axiosClient from "@/lib/client"
import {
  CreateNftCommentType,
  createNftCommentSchema
} from "@/validators/schemas/nfts/comments/create/createCommentSchema"

export default async function postNftComment(data: CreateNftCommentType) {
  const { content, nftId, authorId } = data

  if (content.length > 300) {
    throw new Error("Comment is too long")
  }

  const response = await axiosClient.post(
    `/nfts/${nftId.toString()}/${authorId.toString()}/comments`,
    data
  )

  return createNftCommentSchema.parse(response.data)
}
