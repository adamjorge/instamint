import { z } from "zod"

export const hashtagSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.string().optional()
})

export const hashtagsSchema = z.array(hashtagSchema)
