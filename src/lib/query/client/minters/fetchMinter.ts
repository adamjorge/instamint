import axiosClient from "@/lib/client"
import { Minter } from "@prisma/client"

export default async function fetchMinter(userId: number) {
  try {
    const response = await axiosClient.get<Minter>(`/minters/${userId.toString()}`)

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
