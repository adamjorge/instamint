import { z } from "zod"

const minterFeedSchema = z.object({
  id: z.number(),
  username: z.string()
})
const originalContentFeedSchema = z.object({
  minter: minterFeedSchema
})

export const nftFeedSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  location: z.string().nullable(),
  price: z.number(),
  originalContent: originalContentFeedSchema,
  likedBy: z.array(z.object({ id: z.number() })),
  _count: z.object({
    likedBy: z.number()
  })
})

export type NftFeedType = z.infer<typeof nftFeedSchema>

export const feedSchema = z.array(nftFeedSchema)
