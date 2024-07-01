import prisma from "@/lib/db"
import { followNftsFeed } from "@/lib/query/server/nfts/followNftsFeed"
import type { NftsFeedQuery } from "@/validators/types/nftFeedQueryType"

export async function nftsFeed(cursor: number, minterId?: string) {
  const feedQuery: NftsFeedQuery = {
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
      },
      likedBy: {
        select: {
          id: true
        }
      },
      _count: {
        select: {
          likedBy: true
        }
      }
    },
    skip: cursor * 5,
    take: 5
  }

  if (!minterId) {
    return await prisma.nft.findMany(feedQuery)
  }

  const minterIdNumber = parseInt(minterId, 10)

  return await followNftsFeed(cursor, minterIdNumber, feedQuery)
}
