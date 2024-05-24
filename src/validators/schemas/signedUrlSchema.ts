import { z } from "zod"

export const signedUrlSchema = z.object({
  signedUrl: z.string()
})
