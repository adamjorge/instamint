import prisma from "@/lib/db"

export async function followMinter(followerId: string, followingId: string) {
  const followerIdNumber = parseInt(followerId, 10)
  const followingIdNumber = parseInt(followingId, 10)

  return await prisma.follow.create({
    data: {
      followerId: followerIdNumber,
      followingId: followingIdNumber
    }
  })
}
