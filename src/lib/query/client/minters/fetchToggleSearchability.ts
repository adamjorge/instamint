import axiosClient from "@/lib/client"

export default async function fetchToggleSearchability(userId: number) {
  try {
    const response = await axiosClient.patch(`/minters/${userId.toString()}/toggle-searchability`)

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
