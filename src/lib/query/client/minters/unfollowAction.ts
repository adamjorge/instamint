import axiosClient from "@/lib/client"

export async function unfollow(followerId: string, followingId: string) {
  return await axiosClient.delete("/minters/follow", {
    data: {
      followerId,
      followingId
    }
  })
}
