import { z } from "zod"

export const ApplicationMenuSchema = z.object({
  yourApplication: z.string(),
  language: z.string(),
  privacyPolicy: z.string()
})
