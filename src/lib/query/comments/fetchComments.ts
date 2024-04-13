import { CommentsValidationSchema } from "@/validators/schemas/commentSchema"
import axios, { isAxiosError } from "axios"

export const fetchComments = () =>
  axios
    .get(`/api/comments`)
    .then((res) => CommentsValidationSchema.parse(res.data))
    .catch((err: unknown) => {
      if (isAxiosError(err)) {
        throw new Error(err.message)
      }

      throw new Error(err as string)
    })
