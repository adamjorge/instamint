import { z } from "zod"

export const searchHashtagSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.string()
})

export const searchHashtagsSchema = z.array(searchHashtagSchema)
