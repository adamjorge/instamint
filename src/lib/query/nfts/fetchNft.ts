import { nftSchema } from "@/validators/schemas/nfts/nftSchema"
import axios, { isAxiosError } from "axios"

export default async function fetchNft(id: number) {
  try {
    const response = await axios.get(`/api/nfts/${id.toString()}`)
    const nft = nftSchema.parse(response.data)

    return nft
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
