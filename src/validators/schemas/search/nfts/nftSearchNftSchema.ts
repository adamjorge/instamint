import { nftsSearchHashtagsSchema } from "@/validators/schemas/search/nfts/nftSearchHashtagSchema"
import { nftSearchOriginalContentSchema } from "@/validators/schemas/search/nfts/nftSearchOriginalContentSchema"
import { z } from "zod"

export const nftSearchNftSchema = z.object({
  id: z.number(),
  description: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  location: z.string().nullable(),
  createdAt: z.string(),
  originalContent: nftSearchOriginalContentSchema,
  hashtags: nftsSearchHashtagsSchema,
  likedBy: z.array(z.object({ id: z.number() })),
  _count: z.object({
    likedBy: z.number()
  })
})

export type NftSearchNftSchemaType = z.infer<typeof nftSearchNftSchema>

export const nftSearchNftsSchema = z.array(nftSearchNftSchema)

export type NftSearchNftsSchemaType = z.infer<typeof nftSearchNftsSchema>
