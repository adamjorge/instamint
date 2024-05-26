import axios from "axios"

export async function handleDeleteComment(commentId: string) {
  await axios
    .delete(`/api/comments/${commentId}`)
    .then((res) => res)
    .catch((err: unknown) => {
      throw new Error(err as string)
    })
}
