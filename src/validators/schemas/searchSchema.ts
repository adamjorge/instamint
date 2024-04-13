import { z } from "zod"
import { nftsSearchValidationSchema } from "@/validators/schemas/nftSchema"

export const searchSchema = z.object({
  nfts: nftsSearchValidationSchema
})

export type SearchSchemaType = z.infer<typeof searchSchema>
