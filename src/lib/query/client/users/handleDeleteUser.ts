import axiosClient from "@/lib/client"

export async function handleDeleteUser(userId: string) {
  await axiosClient
    .delete(`/users/${userId}`)
    .then((res) => res)
    .catch((err: unknown) => {
      throw new Error(err as string)
    })
}
