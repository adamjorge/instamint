import prisma from "@/lib/db"

export async function followMinter(followerId: number, followingId: number) {
  return await prisma.follow.create({
    data: {
      followerId,
      followingId
    }
  })
}
