import { z } from "zod"

export const nftSearchMinterSchema = z.object({
  id: z.number(),
  username: z.string()
})
