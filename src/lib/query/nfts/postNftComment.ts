import {
  CreateNftCommentType,
  createNftCommentSchema
} from "@/validators/schemas/nfts/comments/create/createCommentSchema"
import axios, { isAxiosError } from "axios"

export default async function postNftComment(data: CreateNftCommentType) {
  const { content, nftId } = data

  if (content.length > 300) {
    throw new Error("Comment is too long")
  }

  try {
    const response = await axios.post(`/api/nfts/${nftId.toString()}/comments`, data)
    const comment = createNftCommentSchema.parse(response.data)

    return comment
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
