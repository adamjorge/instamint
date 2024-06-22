import axiosClient from "@/lib/client"
import { commentListSchema } from "@/validators/schemas/nfts/comments/commentSchema"

export default async function fetchNftComments(nftId: number) {
  try {
    const response = await axiosClient.get(`/nfts/${nftId.toString()}/comments`)
    const comments = commentListSchema.parse(response.data)

    return comments
  } catch (error) {
    throw new Error(error as string)
  }
}
