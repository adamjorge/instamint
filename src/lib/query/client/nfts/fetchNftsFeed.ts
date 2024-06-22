import axiosClient from "@/lib/client"
import { feedSchema } from "@/validators/schemas/nfts/feedSchema"

export async function fetchNftsFeed(cursor: number, minterId?: number) {
  try {
    const response = minterId
      ? await axiosClient.get(`/nfts/feed/${minterId.toString()}?cursor=${cursor.toString()}`)
      : await axiosClient.get(`/nfts/feed?cursor=${cursor.toString()}`)
    const nfts = feedSchema.parse(response.data)

    return nfts
  } catch (error) {
    throw new Error(error as string)
  }
}
