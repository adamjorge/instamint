import axiosClient from "@/lib/client"

export async function handleDeleteComment(commentId: string) {
  return await axiosClient.delete(`/comments/${commentId}`)
}
