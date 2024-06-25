import prisma from "@/lib/db"
import { getMinterByUserId } from "@/lib/query/server/minters/getMinterByUserId"

export async function followMinter(followerId: string, followingId: number) {
  const user = await getMinterByUserId(followerId)

  if (!user?.minterId) {
    throw new Error("Minter not found")
  }

  return await prisma.follow.create({
    data: {
      followerId: user.minterId,
      followingId
    }
  })
}
