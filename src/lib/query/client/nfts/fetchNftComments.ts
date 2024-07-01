import axiosClient from "@/lib/client"
import { commentListSchema } from "@/validators/schemas/nfts/comments/commentSchema"

export default async function fetchNftComments(nftId: number) {
  const response = await axiosClient.get(`/nfts/${nftId.toString()}/comments`)

  return commentListSchema.parse(response.data)
}
