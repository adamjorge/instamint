import { z } from "zod"

export const NotificationPreferencesSchema = z.object({
  notification: z.string(),
  changeSuccess: z.string(),
  changeError: z.string()
})
