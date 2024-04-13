import prisma from "../../db"
import axios from "axios"
import { nftsSearchValidationSchema } from "@/validators/schemas/nftSchema"
import { SearchSchemaType } from "@/validators/schemas/searchSchema"

export async function searchNfts(search: string) {
  return await prisma.nft.findMany({
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
    },
    include: {
      originalContent: {
        include: {
          minter: true
        }
      },
      hashtags: true
    }
  })
}

export async function fetchNfts(searchTerm: string) {
  try {
    const res = await axios.get<SearchSchemaType>(`/api/nfts?search=${searchTerm}`)

    return nftsSearchValidationSchema.parse(res.data.nfts)
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.message)
    }

    throw new Error(err as string)
  }
}
