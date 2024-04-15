import { z } from "zod"
import { searchHashtagsSchema } from "@/validators/schemas/search/nfts/searchHashtagSchema"
import { searchOriginalContentSchema } from "@/validators/schemas/search/nfts/searchOriginalContentSchema"

export const searchNftSchema = z.object({
  id: z.number(),
  description: z.string(),
  imageUrl: z.string(),
  createdAt: z.string(),
  originalContent: searchOriginalContentSchema,
  hashtags: searchHashtagsSchema
})

export const searchNftsSchema = z.array(searchNftSchema)

export type SearchNftSchemaType = z.infer<typeof searchNftSchema>