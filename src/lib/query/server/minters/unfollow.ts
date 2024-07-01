import prisma from "@/lib/db"
import getMinterById from "@/lib/query/server/minters/getMinterById"

export async function unfollowMinter(followerId: number, followingId: number) {
  const user = await getMinterById(followerId)

  if (!user.id) {
    throw new Error("Minter not found")
  }

  return await prisma.follow.delete({
    where: {
      followId: {
        followerId,
        followingId
      }
    }
  })
}
