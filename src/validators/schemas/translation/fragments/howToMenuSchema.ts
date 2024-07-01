import { z } from "zod"

export const HowToMenuSchema = z.object({
  howTo: z.string(),
  changeProfile: z.string(),
  notifications: z.string()
})
