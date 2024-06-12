import axios from "axios"

export async function follow(followerId: string, followingId: string) {
  try {
    const response = await axios.post("/api/minters/follow", {
      followerId,
      followingId
    })

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
