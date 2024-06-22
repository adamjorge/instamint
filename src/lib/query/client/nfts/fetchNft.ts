import { nftSchema } from "@/validators/schemas/nfts/nftSchema"
import axios from "axios"

export default async function fetchNft(id: number) {
  try {
    const response = await axios.get(`/api/nfts/${id.toString()}`)
    const nft = nftSchema.parse(response.data)

    return nft
  } catch (error) {
    throw new Error(error as string)
  }
}
