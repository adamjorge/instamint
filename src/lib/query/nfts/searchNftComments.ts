import prisma from "@/lib/db"

export default async function searchNftComments(nftId: string) {
  const comments = await prisma.comment.findMany({
    select: {
      id: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      author: {
        select: {
          id: true,
          username: true,
          avatarUrl: true
        }
      },
      children: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          author: {
            select: {
              id: true,
              username: true,
              avatarUrl: true
            }
          }
        }
      },
      nft: {
        select: {
          originalContent: {
            select: {
              minter: {
                select: {
                  id: true,
                  username: true,
                  avatarUrl: true
                }
              }
            }
          }
        }
      }
    },
    where: { nftId: Number(nftId), parentId: null },
    orderBy: { createdAt: "desc" }
  })

  return comments
}
