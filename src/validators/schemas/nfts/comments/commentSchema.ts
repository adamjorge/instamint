import { z } from "zod"

const minterSchema = z.object({
  id: z.number(),
  username: z.string()
})
const originalContentSchema = z.object({
  minter: minterSchema
})
const nftSchema = z.object({
  originalContent: originalContentSchema
})

export const commentSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  nft: nftSchema
})

export type CommentType = z.infer<typeof commentSchema>

export const commentListSchema = z.array(commentSchema)
