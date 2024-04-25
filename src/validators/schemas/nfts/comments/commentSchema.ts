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
const childCommentSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type ChildCommentType = z.infer<typeof childCommentSchema>

const childrenCommentSchema = z.array(childCommentSchema)

export const commentSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  children: childrenCommentSchema,
  nft: nftSchema
})

export type CommentType = z.infer<typeof commentSchema>

export const commentListSchema = z.array(commentSchema)

export type CommentListType = z.infer<typeof commentListSchema>
