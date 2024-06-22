import { Minter } from "@prisma/client"
import axios from "axios"

export default async function fetchMinter(userId: number) {
  try {
    const response = await axios.get<Minter>(`/api/minters/${userId.toString()}`)

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
