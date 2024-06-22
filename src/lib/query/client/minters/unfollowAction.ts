import axiosClient from "@/lib/client"

export async function unfollow(followerId: string, followingId: string) {
  try {
    const response = await axiosClient.delete("/minters/follow", {
      data: {
        followerId,
        followingId
      }
    })

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
