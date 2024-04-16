import { z } from "zod"
import { nftSearchNftsSchema } from "@/validators/schemas/search/nfts/nftSearchNftSchema"

export const searchSchema = z.object({
  nfts: nftSearchNftsSchema
})
export type SearchSchemaType = z.infer<typeof searchSchema>
