import { z } from "zod"

export const ProfileChangesSchema = z.object({
  error: z.string(),
  changeMyPassword: z.string(),
  changeProfile: z.string(),
  bio: z.string(),
  bioWIP: z.string(),
  deleteAccount: z.string(),
  deleteAccountConfirmation: z.string(),
  deleteAccountDescription: z.string(),
  profilePicture: z.string(),
  uploadProfilePicture: z.string(),
  uploadError: z.string(),
  uploadSuccess: z.string()
})
