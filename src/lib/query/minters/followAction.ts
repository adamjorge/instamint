import axios, { isAxiosError } from "axios"

export default async function follow(followerId: string, followingId: string) {
  try {
    const response = await axios.post("/api/minters/follow", {
      followerId,
      followingId
    })

    return response
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
