import { z } from "zod"

export const notificationTypeSchema = z.object({ name: z.string() })

export const notificationTypesSchema = z.array(notificationTypeSchema)
