import axiosClient from "@/lib/client"

export default async function fetchDeleteMinter(minterId: string) {
  return await axiosClient.delete(`/minters/${minterId}`)
}
