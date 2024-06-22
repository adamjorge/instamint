import { PaginatedCommentsValidationSchema } from "@/validators/schemas/commentSchema"
import axios from "axios"

export const fetchComments = (page: number) =>
  axios
    .get(`/api/comments?page=${page.toString()}`)
    .then((res) => {
      const data = PaginatedCommentsValidationSchema.parse(res.data)

      return { comments: data.comments, totalPages: data.totalPages }
    })
    .catch((err: unknown) => {
      throw new Error(err as string)
    })
