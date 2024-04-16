import axios, { isAxiosError } from "axios"
import { MinterSearchMintersSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { NftSearchNftsSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { searchSchema } from "@/validators/schemas/search/searchSchema"
import { TeabagsSearchTeabagsSchemaType } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"

export async function fetchSearch(searchTerm: string) {
  if (searchTerm === "") {
    return { nfts: [], minters: [], teabags: [] }
  }

  try {
    const nfts = await axios.get<NftSearchNftsSchemaType>(`/api/nfts?search=${searchTerm}`)
    const minters = await axios.get<MinterSearchMintersSchemaType>(
      `/api/minters?search=${searchTerm}`
    )
    const teabags = await axios.get<TeabagsSearchTeabagsSchemaType>(
      `/api/teabags?search=${searchTerm}`
    )

    return searchSchema.parse({
      nfts: nfts.data,
      minters: minters.data,
      teabags: teabags.data
    })
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.message)
    }

    throw new Error(err as string)
  }
}
