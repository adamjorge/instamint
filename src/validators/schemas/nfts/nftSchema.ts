import { z } from "zod"

const minterSchema = z.object({
  id: z.number(),
  username: z.string()
})
const originalContentSchema = z.object({
  id: z.number(),
  minter: minterSchema
})

export const nftSchema = z.object({
  id: z.number(),
  description: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  location: z.string().nullable(),
  isDraft: z.boolean(),
  createdAt: z.string(),
  originalContent: originalContentSchema
})
