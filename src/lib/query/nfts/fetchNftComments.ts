import { commentListSchema } from "@/validators/schemas/nfts/comments/commentSchema"
import axios, { isAxiosError } from "axios"

export default async function fetchNftComments(nftId: number) {
  try {
    const response = await axios.get(`/api/nfts/${nftId.toString()}/comments`)
    const comments = commentListSchema.parse(response.data)

    return comments
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
