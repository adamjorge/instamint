import { z } from "zod"
import { searchMinterSchema } from "@/validators/schemas/search/nfts/searchMinterSchema"

export const searchOriginalContentSchema = z.object({
  id: z.number(),
  minter: searchMinterSchema
})
