import { feedSchema } from "@/validators/schemas/nfts/feedSchema"
import axios, { isAxiosError } from "axios"

export async function fetchNftsFeed() {
  try {
    const response = await axios.get("/api/nfts/feed")
    const nfts = feedSchema.parse(response.data)

    return nfts
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
