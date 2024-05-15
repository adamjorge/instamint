import prisma from "@/lib/db"
import type { NftsFeedQuery } from "@/validators/types/nftFeedQueryType"

export async function followNftsFeed(cursor: number, minterId: number, feedQuery: NftsFeedQuery) {
  const followedAccounts = await prisma.follow.findMany({
    where: { followerId: minterId },
    select: { followingId: true }
  })
  const followedIds = followedAccounts.map((account) => account.followingId)

  return await prisma.nft.findMany({
    ...feedQuery,
    where: { originalContent: { minterId: { in: followedIds } } }
  })
}
