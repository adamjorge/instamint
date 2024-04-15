import { PaginatedCommentsValidationSchema } from "@/validators/schemas/commentSchema"
import axios, { isAxiosError } from "axios"

export const fetchComments = (page: number) =>
  axios
    .get(`/api/comments?page=${page.toString()}`)
    .then((res) => {
      const data = PaginatedCommentsValidationSchema.parse(res.data)
      data.comments.forEach((comment) => {
        comment.createdAt = comment.createdAt.slice(0, 10)
        comment.updatedAt &&= comment.updatedAt.slice(0, 10)
      })

      return { comments: data.comments, totalPages: data.totalPages }
    })
    .catch((err: unknown) => {
      if (isAxiosError(err)) {
        throw new Error(err.message)
      }

      throw new Error(err as string)
    })
