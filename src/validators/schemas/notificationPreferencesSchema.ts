import { z } from "zod"

export const notificationPreferenceSchema = z.object({
  id: z.string(),
  minterId: z.number(),
  type: z.string(),
  isEnabled: z.boolean()
})

export const notificationPreferencesSchema = z.array(notificationPreferenceSchema)
