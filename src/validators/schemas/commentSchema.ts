import { z } from "zod"

export const CommentValidationSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
  nftId: z.number(),
  minterId: z.number()
})

export type Comment = z.infer<typeof CommentValidationSchema>

export const CommentsValidationSchema = z.array(CommentValidationSchema)

export type Comments = z.infer<typeof CommentsValidationSchema>

export const PaginatedCommentsValidationSchema = z.object({
  comments: CommentsValidationSchema,
  totalPages: z.number()
})
