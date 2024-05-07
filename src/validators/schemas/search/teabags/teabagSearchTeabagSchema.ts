import { z } from "zod"

export const teabagSearchTeabagSchema = z.object({
  id: z.number(),
  name: z.string(),
  profileUrl: z.string(),
  bio: z.string()
})

export type TeabagSearchTeabagSchemaType = z.infer<typeof teabagSearchTeabagSchema>

export const teabagsSearchTeabagsSchema = z.array(teabagSearchTeabagSchema)

export type TeabagsSearchTeabagsSchemaType = z.infer<typeof teabagsSearchTeabagsSchema>
