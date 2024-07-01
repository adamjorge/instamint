import { z } from "zod"

export const PrivacyMenuSchema = z.object({
  whoCanSee: z.string(),
  privacy: z.string()
})
