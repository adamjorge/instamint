import axiosClient from "@/lib/client"

export async function handleDeleteUser(userId: string) {
  return await axiosClient.delete(`/users/${userId}`).then((res) => res)
}
