import axios, { isAxiosError } from "axios"
import { MinterSearchMintersSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import { NftSearchNftsSchemaType } from "@/validators/schemas/search/nfts/nftSearchNftSchema"
import { searchSchema } from "@/validators/schemas/search/searchSchema"
import { TeabagsSearchTeabagsSchemaType } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"
import { SearchType } from "@/validators/types/searchType"
import { searchMinters } from "../minters/search"
import { searchNfts } from "../nfts/search"
import { searchTeaBags } from "../teabags/search"

export async function fetchSearch(searchTerm: string) {
  if (searchTerm === "") {
    return { nfts: [], minters: [], teabags: [] }
  }

  try {
    const nfts = await axios.get<NftSearchNftsSchemaType>(`/api/search/nfts?search=${searchTerm}`)
    const minters = await axios.get<MinterSearchMintersSchemaType>(
      `/api/search/minters?search=${searchTerm}`
    )
    const teabags = await axios.get<TeabagsSearchTeabagsSchemaType>(
      `/api/search/teabags?search=${searchTerm}`
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

export async function searchByType(type: SearchType, searchTerm: string) {
  switch (type) {
    case "nfts":
      return await searchNfts(searchTerm)

    case "minters":
      return await searchMinters(searchTerm)

    case "teabags":
      return await searchTeaBags(searchTerm)

    default:
      throw new Error("Invalid type")
  }
}
