import { z } from "zod"

export const tokenValidationSchema = z.object({
  token: z.string()
})
