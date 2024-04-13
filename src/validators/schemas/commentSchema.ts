import { z } from "zod"

export const CommentValidationSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
  userId: z.number(),
  teaBagId: z.number()
})

export const CommentsValidationSchema = z.array(CommentValidationSchema)
