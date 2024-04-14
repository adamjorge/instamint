import axios, { isAxiosError } from "axios"

export async function handleDeleteComment(commentId: string) {
  await axios
    .delete(`/api/comments/delete/${commentId}`)
    .then((res) => res)
    .catch((err: unknown) => {
      if (isAxiosError(err)) {
        throw new Error(err.message)
      }

      throw new Error(err as string)
    })
}
