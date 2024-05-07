import { nftSearchMinterSchema } from "@/validators/schemas/search/nfts/nftSearchMinterSchema"
import { z } from "zod"

export const nftSearchOriginalContentSchema = z.object({
  id: z.number(),
  minter: nftSearchMinterSchema
})
