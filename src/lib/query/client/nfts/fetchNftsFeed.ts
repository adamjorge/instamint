import { feedSchema } from "@/validators/schemas/nfts/feedSchema"
import axios from "axios"

export async function fetchNftsFeed(cursor: number, minterId?: number) {
  try {
    const response = minterId
      ? await axios.get(`/api/nfts/feed/${minterId.toString()}?cursor=${cursor.toString()}`)
      : await axios.get(`/api/nfts/feed?cursor=${cursor.toString()}`)
    const nfts = feedSchema.parse(response.data)

    return nfts
  } catch (error) {
    throw new Error(error as string)
  }
}
