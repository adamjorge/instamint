import { z } from "zod"

export const createNftCommentSchema = z.object({
  content: z.string(),
  nftId: z.number(),
  parentId: z.number().nullable(),
  authorId: z.number()
})

export type CreateNftCommentType = z.infer<typeof createNftCommentSchema>
