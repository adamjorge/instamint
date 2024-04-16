import { z } from "zod"
import { nftsSearchHashtagsSchema } from "@/validators/schemas/search/nfts/nftSearchHashtagSchema"
import { nftSearchOriginalContentSchema } from "@/validators/schemas/search/nfts/nftSearchOriginalContentSchema"

export const nftSearchNftSchema = z.object({
  id: z.number(),
  description: z.string(),
  imageUrl: z.string(),
  createdAt: z.string(),
  originalContent: nftSearchOriginalContentSchema,
  hashtags: nftsSearchHashtagsSchema
})

export type NftSearchNftSchemaType = z.infer<typeof nftSearchNftSchema>

export const nftSearchNftsSchema = z.array(nftSearchNftSchema)

export type NftSearchNftsSchemaType = z.infer<typeof nftSearchNftsSchema>
