import { z } from "zod"

export const teabagSearchTeabagSchema = z.object({
  id: z.number(),
  name: z.string(),
  profileUrl: z.string(),
  bio: z.string()
})

export type TeabagSearchTeabag = z.infer<typeof teabagSearchTeabagSchema>

export const teabagsSearchTeabagsSchema = z.array(teabagSearchTeabagSchema)

export type TeabagsSearchTeabags = z.infer<typeof teabagsSearchTeabagsSchema>
