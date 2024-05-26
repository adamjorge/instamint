import axios from "axios"

export async function handleDeleteUser(userId: string) {
  await axios
    .delete(`/api/users/${userId}`)
    .then((res) => res)
    .catch((err: unknown) => {
      throw new Error(err as string)
    })
}
