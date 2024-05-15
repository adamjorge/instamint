import prisma from "@/lib/db"

export type NftsFeedQuery = Parameters<typeof prisma.nft.findMany>[0]
