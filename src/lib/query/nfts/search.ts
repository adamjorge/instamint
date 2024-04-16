import axios from "axios"
import {
  nftSearchNftsSchema,
  NftSearchNftsSchemaType
} from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { Prisma } from "@prisma/client"
import NftSelect = Prisma.NftSelect
import prisma from "@/lib/db"

const nftSearchSelect: NftSelect = {
  id: true,
  description: true,
  imageUrl: true,
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

export async function fetchNfts(searchTerm: string | null) {
  if (!searchTerm) {
    return []
  }

  try {
    const res = await axios.get<NftSearchNftsSchemaType>(`/api/nfts?search=${searchTerm}`)

    return nftSearchNftsSchema.parse(res.data)
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.message)
    }

    throw new Error(err as string)
  }
}
