import { z } from "zod"

export const nftSearchHashtagSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.string()
})

export const nftsSearchHashtagsSchema = z.array(nftSearchHashtagSchema)
