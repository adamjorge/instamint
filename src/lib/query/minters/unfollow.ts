import prisma from "@/lib/db"
import { getMinterByUserId } from "@/lib/query/minters/getMinterByUserId"

export async function unfollowMinter(followerId: string, followingId: number) {
  const user = await getMinterByUserId(followerId)

  if (!user?.minterId) {
    throw new Error("Minter not found")
  }

  return await prisma.follow.delete({
    where: {
      followId: {
        followerId: user.minterId,
        followingId
      }
    }
  })
}
