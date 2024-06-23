import axiosClient from "@/lib/client"

export async function follow(followerId: string, followingId: string) {
  return await axiosClient.post("/minters/follow", {
    followerId,
    followingId
  })
}
