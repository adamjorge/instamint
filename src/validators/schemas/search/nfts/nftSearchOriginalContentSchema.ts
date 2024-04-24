import { z } from "zod"
import { nftSearchMinterSchema } from "@/validators/schemas/search/nfts/nftSearchMinterSchema"

export const nftSearchOriginalContentSchema = z.object({
  id: z.number(),
  minter: nftSearchMinterSchema
})
