import { z } from "zod"
import { originalContentSchema } from "@/validators/schemas/originalContent"
import { hashtagsSchema } from "@/validators/schemas/hashtagSchema"

export const nftSearchValidationSchema = z.object({
  id: z.number(),
  description: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  location: z.string(),
  isDraft: z.boolean(),
  createdAt: z.string(),
  originalContentId: z.number(),
  originalContent: originalContentSchema.optional(),
  hashtags: hashtagsSchema.optional()
})

export const nftsSearchValidationSchema = z.array(nftSearchValidationSchema)

export const nftSchema = nftSearchValidationSchema

export type NftSchemaType = z.infer<typeof nftSchema>
