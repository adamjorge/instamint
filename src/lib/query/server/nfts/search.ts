import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"

import NftSelect = Prisma.NftSelect

const nftSearchSelect: NftSelect = {
  id: true,
  description: true,
  imageUrl: true,
  price: true,
  location: true,
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
  hashtags: true,
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
}

export async function searchNfts(params: Params) {
  const { search, minPrice, maxPrice } = params
  const min = minPrice !== "" ? parseInt(minPrice, 10) : 0
  const max = maxPrice !== "" ? parseInt(maxPrice, 10) : Number.MAX_SAFE_INTEGER

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
        },
        {
          location: {
            contains: search,
            mode: "insensitive"
          }
        }
      ],
      price: {
        gte: min,
        lte: max
      }
    }
  })
}

type Params = {
  search: string
  minPrice: string
  maxPrice: string
}
