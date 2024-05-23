import axios from "axios"

export default async function fetchToggleSearchability(userId: number) {
  try {
    const response = await axios.patch(`/api/minters/${userId.toString()}/toggle-searchability`)

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
