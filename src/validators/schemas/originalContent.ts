import { z } from "zod"
import { minterSchema } from "@/validators/schemas/minterSchema"

export const originalContentSchema = z.object({
  id: z.number(),
  imageUrl: z.string(),
  createdAt: z.string().nullable().optional(),
  updatedAt: z.string().optional(),
  minter: minterSchema.optional()
})
