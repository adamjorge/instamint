import axios, { isAxiosError } from "axios"

export async function unfollow(followerId: string, followingId: string) {
  try {
    const response = await axios.delete("/api/minters/follow", {
      data: {
        followerId,
        followingId
      }
    })

    return response
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
