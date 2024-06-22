import axiosClient from "@/lib/client"
import { nftSchema } from "@/validators/schemas/nfts/nftSchema"

export default async function fetchNft(id: number) {
  try {
    const response = await axiosClient.get(`/nfts/${id.toString()}`)
    const nft = nftSchema.parse(response.data)

    return nft
  } catch (error) {
    throw new Error(error as string)
  }
}
