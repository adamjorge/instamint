import { z } from "zod"

export const CommentSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  deletedAt: z.date().nullable()
})
