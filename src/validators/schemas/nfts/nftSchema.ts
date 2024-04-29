import { z } from "zod"

const minterSchema = z.object({
  id: z.number(),
  username: z.string()
})
const originalContentSchema = z.object({
  id: z.number(),
  minter: minterSchema
})
const hashtagSchema = z.object({
  id: z.number(),
  name: z.string()
})
const hashtagListSchema = z.array(hashtagSchema)

export const nftSchema = z.object({
  id: z.number(),
  description: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  location: z.string().nullable(),
  createdAt: z.string(),
  originalContent: originalContentSchema,
  hashtags: hashtagListSchema
})

export type NftType = z.infer<typeof nftSchema>
