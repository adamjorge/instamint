import { minterSearchMintersSchema } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { nftSearchNftsSchema } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { teabagsSearchTeabagsSchema } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"
import { z } from "zod"

export const searchSchema = z.object({
  nfts: nftSearchNftsSchema,
  minters: minterSearchMintersSchema,
  teabags: teabagsSearchTeabagsSchema
})

export type SearchSchemaType = z.infer<typeof searchSchema>
