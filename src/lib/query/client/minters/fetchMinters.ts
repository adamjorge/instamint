import axiosClient from "@/lib/client"
import { Minter, Prisma } from "@prisma/client"

import MinterCountOutputTypeSelect = Prisma.MinterCountOutputTypeSelect

export default async function fetchMinters(page: number) {
  const { data } = await axiosClient.get<MintersWithTotalPages>(`/minters?page=${page.toString()}`)

  return data
}

export type MinterWithCount = Minter & { _count: MinterCountOutputTypeSelect }

export type MintersWithTotalPages = { minters: MinterWithCount[]; totalPages: number }
