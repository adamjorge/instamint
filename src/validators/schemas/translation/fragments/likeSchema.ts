import { z } from "zod"

export const LikeSchema = z.object({
  likeError: z.string(),
  dislikeError: z.string()
})
