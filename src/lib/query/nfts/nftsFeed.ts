import prisma from "@/lib/db"
import { followNftsFeed } from "@/lib/query/nfts/followNftsFeed"

export async function nftsFeed(cursor: number, minterId?: string) {
  if (!minterId) {
    return await prisma.nft.findMany({
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

  const minterIdNumber = parseInt(minterId, 10)

  return await followNftsFeed(cursor, minterIdNumber)
}
