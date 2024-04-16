import axios, { isAxiosError } from "axios"
import {
  minterSearchMintersSchema,
  MinterSearchMintersSchemaType
} from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import {
  nftSearchNftsSchema,
  NftSearchNftsSchemaType
} from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { searchSchema } from "@/validators/schemas/search/searchSchema"
import { TeabagsSearchTeabagsSchemaType } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"

export async function fetchSearch(searchTerm: string | null) {
  if (!searchTerm) {
    return { nfts: [], minters: [], teabags: [] }
  }

  try {
    const nfts = await axios.get<NftSearchNftsSchemaType>(`/api/nfts?search=${searchTerm}`)
    const validatedNfts = nftSearchNftsSchema.parse(nfts.data)
    const minters = await axios.get<MinterSearchMintersSchemaType>(
      `/api/minters?search=${searchTerm}`
    )
    const validatedMinters = minterSearchMintersSchema.parse(minters.data)
    const teabags = await axios.get<TeabagsSearchTeabagsSchemaType>(
      `/api/teabags?search=${searchTerm}`
    )
    const validatedTeabags = nftSearchNftsSchema.parse(teabags.data)

    return searchSchema.parse({
      nfts: validatedNfts,
      minters: validatedMinters,
      teabags: validatedTeabags
    })
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.message)
    }

    throw new Error(err as string)
  }
}
