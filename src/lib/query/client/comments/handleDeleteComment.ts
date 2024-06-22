import axiosClient from "@/lib/client"

export async function handleDeleteComment(commentId: string) {
  await axiosClient
    .delete(`/comments/${commentId}`)
    .then((res) => res)
    .catch((err: unknown) => {
      throw new Error(err as string)
    })
}
