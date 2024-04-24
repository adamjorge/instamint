import { Nft } from "@prisma/client"
import axios, { isAxiosError } from "axios"

export default async function fetchNft(id: number) {
  try {
    const response = await axios.get<Nft>(`/api/nfts/${id.toString()}`)

    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
