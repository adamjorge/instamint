import { z } from "zod"

export const MinterSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  phoneNumber: z.string().nullable(),
  defaultLanguage: z.string(),
  profileUrl: z.string(),
  avatarUrl: z.string(),
  bio: z.string(),
  authorName: z.string().nullable(),
  isVisible: z.boolean(),
  isSearchableByEmail: z.boolean(),
  is2FAEnabled: z.boolean(),
  isAdmin: z.boolean(),
  isReported: z.boolean(),
  createdAt: z.string().nullable(),
  updatedAt: z.string().nullable(),
  deletedAt: z
    .string()
    .nullable()
    .transform((val) => (val ? new Date(val) : null))
})
