import axiosClient from "@/lib/client"
import {
  CreateNftCommentType,
  createNftCommentSchema
} from "@/validators/schemas/nfts/comments/create/createCommentSchema"

export default async function postNftComment(data: CreateNftCommentType) {
  const { content, nftId } = data

  if (content.length > 300) {
    throw new Error("Comment is too long")
  }

  try {
    const response = await axiosClient.post(`/nfts/${nftId.toString()}/comments`, data)
    const comment = createNftCommentSchema.parse(response.data)

    return comment
  } catch (error) {
    throw new Error(error as string)
  }
}
