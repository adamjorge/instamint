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
          avatarKey: true
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
              avatarKey: true
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
                  avatarKey: true
                }
              }
            }
          }
        }
      }
    },
    where: { nftId: parseInt(nftId, 10), parentId: null },
    orderBy: { createdAt: "desc" }
  })

  return comments
}
