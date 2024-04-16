import { z } from "zod"
import { nftSearchNftsSchema } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { minterSearchMintersSchema } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { teabagsSearchTeabagsSchema } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"

export const searchSchema = z.object({
  nfts: nftSearchNftsSchema,
  minters: minterSearchMintersSchema,
  teabags: teabagsSearchTeabagsSchema
})

export type SearchSchemaType = z.infer<typeof searchSchema>
