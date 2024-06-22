import { Minter, Prisma } from "@prisma/client"
import axios from "axios"

import MinterCountOutputTypeSelect = Prisma.MinterCountOutputTypeSelect

export default async function fetchMinters(page: number) {
  const { data } = await axios.get<MintersWithTotalPages>(`/api/minters?page=${page.toString()}`)

  return data
}

export type MinterWithCount = Minter & { _count: MinterCountOutputTypeSelect }

export type MintersWithTotalPages = { minters: MinterWithCount[]; totalPages: number }
