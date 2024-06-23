import axiosClient from "@/lib/client"
import { nftSchema } from "@/validators/schemas/nfts/nftSchema"

export default async function fetchNft(id: number) {
  const response = await axiosClient.get(`/nfts/${id.toString()}`)

  return nftSchema.parse(response.data)
}
