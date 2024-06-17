import { z } from "zod"

export const originalContentSchema = z.object({
  id: z.number(),
  minterId: z.number(),
  imageUrl: z.string(),
  createdAt: z.string()
})

export type OriginalContentSchemaType = z.infer<typeof originalContentSchema>

export const originalContentsResponseSchema = z.array(originalContentSchema)

export type OriginalContentsResponseType = OriginalContentSchemaType[]
