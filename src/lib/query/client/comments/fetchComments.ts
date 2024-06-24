import axiosClient from "@/lib/client"
import { PaginatedCommentsValidationSchema } from "@/validators/schemas/commentSchema"

export async function fetchComments(page: number) {
  const response = await axiosClient.get(`/comments?page=${page.toString()}`)
  const data = PaginatedCommentsValidationSchema.parse(response.data)

  return { comments: data.comments, totalPages: data.totalPages }
}
