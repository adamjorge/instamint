import axiosClient from "@/lib/client"

export async function follow(followerId: string, followingId: string) {
  try {
    const response = await axiosClient.post("/minters/follow", {
      followerId,
      followingId
    })

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
