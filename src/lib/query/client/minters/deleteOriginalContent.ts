import axiosClient from "@/lib/client"

export async function deleteOriginalContent(contentId: number) {
  return await axiosClient.delete(`/delete-original-content/${contentId.toString()}`)
}
