import { CommentsValidationSchema } from "@/validators/schemas/commentSchema"
import axios, { isAxiosError } from "axios"

export const fetchComments = () =>
  axios
    .get(`/api/comments`)
    .then((res) => {
      const data = CommentsValidationSchema.parse(res.data)
      data.forEach((comment) => {
        comment.createdAt = comment.createdAt.slice(0, 10)
        comment.updatedAt &&= comment.updatedAt.slice(0, 10)
      })

      return data
    })
    .catch((err: unknown) => {
      if (isAxiosError(err)) {
        throw new Error(err.message)
      }

      throw new Error(err as string)
    })
