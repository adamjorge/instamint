import axiosClient from "@/lib/client"

export default async function fetchToggleSearchability(userId: number) {
  return await axiosClient.patch(`/minters/${userId.toString()}/toggle-searchability`)
}
