import prisma from "@/lib/db"

export default async function searchNftComments(nftId: string) {
  const comments = await prisma.comment.findMany({
    select: {
      id: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      nft: {
        select: {
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
      }
    },
    where: { nftId: Number(nftId) },
    orderBy: { createdAt: "desc" }
  })

  return comments
}
