import { z } from "zod"
import { searchNftsSchema } from "@/validators/schemas/search/nfts/searchNftSchema"

export const searchSchema = z.object({
  nfts: searchNftsSchema
})

export type SearchSchemaType = z.infer<typeof searchSchema>
