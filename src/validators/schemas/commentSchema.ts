import { z } from "zod"

export const CommentValidationSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
  nftId: z.number(),
  minterId: z.number()
})

export const CommentsValidationSchema = z.array(CommentValidationSchema)
