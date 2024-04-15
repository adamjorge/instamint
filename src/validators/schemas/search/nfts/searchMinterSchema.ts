import { z } from "zod"

export const searchMinterSchema = z.object({
  id: z.number(),
  username: z.string()
})
