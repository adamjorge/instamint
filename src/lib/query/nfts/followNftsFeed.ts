import prisma from "@/lib/db"

export async function followNftsFeed(cursor: number, minterId: number) {
  const followedAccounts = await prisma.follow.findMany({
    where: { followerId: minterId },
    select: { followingId: true }
  })
  const followedIds = followedAccounts.map((account) => account.followingId)

  return await prisma.nft.findMany({
    where: { originalContent: { minterId: { in: followedIds } } },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      createdAt: true,
      description: true,
      imageUrl: true,
      location: true,
      price: true,
      originalContent: {
        select: {
          minter: {
            select: {
              id: true,
              username: true
            }
          }
        }
      }
    },
    skip: cursor * 5,
    take: 5
  })
}
