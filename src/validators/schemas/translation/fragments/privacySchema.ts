import { z } from "zod"

export const PrivacySchema = z.object({
  authorizeSearchByEmail: z.string()
})
