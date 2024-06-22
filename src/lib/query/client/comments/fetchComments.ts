import axiosClient from "@/lib/client"
import { PaginatedCommentsValidationSchema } from "@/validators/schemas/commentSchema"

export const fetchComments = (page: number) =>
  axiosClient
    .get(`/comments?page=${page.toString()}`)
    .then((res) => {
      const data = PaginatedCommentsValidationSchema.parse(res.data)

      return { comments: data.comments, totalPages: data.totalPages }
    })
    .catch((err: unknown) => {
      throw new Error(err as string)
    })
