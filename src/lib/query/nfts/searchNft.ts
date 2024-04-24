import prisma from "@/lib/db"

export default async function searchNft(id: string) {
  const nft = await prisma.nft.findUnique({
    select: {
      id: true,
      description: true,
      imageUrl: true,
      price: true,
      location: true,
      createdAt: true,
      originalContent: {
        include: {
          minter: {
            select: {
              id: true,
              username: true
            }
          }
        }
      }
    },
    where: { id: parseInt(id, 10) }
  })

  return nft
}
