import { z } from "zod"

export const minterSearchMinterSchema = z.object({
  id: z.number(),
  username: z.string(),
  profileUrl: z.string(),
  avatarKey: z.string(),
  bio: z.string(),
  location: z.string().nullable(),
  isFollowed: z.boolean()
})

export type MinterSearchMinterSchemaType = z.infer<typeof minterSearchMinterSchema>

export const minterSearchMintersSchema = z.array(minterSearchMinterSchema)

export type MinterSearchMintersSchemaType = z.infer<typeof minterSearchMintersSchema>
