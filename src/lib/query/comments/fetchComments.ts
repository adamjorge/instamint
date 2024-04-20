import { PaginatedCommentsValidationSchema } from "@/validators/schemas/commentSchema"
import axios, { isAxiosError } from "axios"

export const fetchComments = (page: number) =>
  axios
    .get(`/api/comments?page=${page.toString()}`)
    .then((res) => {
      const data = PaginatedCommentsValidationSchema.parse(res.data)

      return { comments: data.comments, totalPages: data.totalPages }
    })
    .catch((err: unknown) => {
      if (isAxiosError(err)) {
        throw new Error(err.message)
      }

      throw new Error(err as string)
    })
