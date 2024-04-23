import { z } from "zod"

export const connectionSchema = z.object({
  email: z.string(),
  password: z.string()
})
