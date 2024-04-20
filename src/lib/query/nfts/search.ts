import { Prisma } from "@prisma/client"
import NftSelect = Prisma.NftSelect
import prisma from "@/lib/db"

const nftSearchSelect: NftSelect = {
  id: true,
  description: true,
  imageUrl: true,
  price: true,
  createdAt: true,
  originalContentId: true,
  originalContent: {
    select: {
      id: true,
      minterId: true,
      minter: {
        select: {
          id: true,
          username: true
        }
      }
    }
  },
  hashtags: true
}

export async function searchNfts(search: string) {
  return await prisma.nft.findMany({
    select: nftSearchSelect,
    where: {
      isDraft: false,
      OR: [
        {
          description: {
            contains: search,
            mode: "insensitive"
          }
        },
        {
          originalContent: {
            minter: {
              username: {
                contains: search,
                mode: "insensitive"
              }
            }
          }
        },
        {
          hashtags: {
            some: {
              name: {
                contains: search,
                mode: "insensitive"
              }
            }
          }
        }
      ]
    }
  })
}
