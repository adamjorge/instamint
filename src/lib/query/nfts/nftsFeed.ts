import prisma from "@/lib/db"

export async function nftsFeed() {
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
    }
  })
}
