import { z } from "zod"

export const notificationPreferenceSchema = z.object({
  minterId: z.number(),
  type: z.string(),
  isEnabled: z.boolean()
})

export const notificationPreferencesSchema = z.array(notificationPreferenceSchema)

export const notificationPreferenceChangeSchema = z.object({
  message: z.string(),
  changedPreference: z.object({
    type: z.string(),
    isEnabled: z.boolean()
  })
})
