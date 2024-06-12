import { z } from "zod"

export const changeAvatarSchema = z.object({
  image: z.instanceof(File).refine((file) => file.size !== 0, "Please upload an image")
})
