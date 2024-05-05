import axios, { isAxiosError } from "axios"

export async function handleDeleteUser(userId: string) {
  await axios
    .delete(`/api/users/${userId}`)
    .then((res) => res)
    .catch((err: unknown) => {
      if (isAxiosError(err)) {
        throw new Error(err.message)
      }

      throw new Error(err as string)
    })
}
