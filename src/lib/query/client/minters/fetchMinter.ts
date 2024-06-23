import axiosClient from "@/lib/client"
import { Minter } from "@prisma/client"

export default async function fetchMinter(userId: number) {
  return await axiosClient.get<Minter>(`/minters/${userId.toString()}`)
}
