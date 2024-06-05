import { z } from "zod"

export const ChangePasswordSchema = z.object({
  changePasswordTitle: z.string(),
  changePassword: z.string(),
  changeMyPassword: z.string(),
  currentPassword: z.string(),
  currentPasswordDescription: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string(),
  backToHome: z.string(),
  appDescription: z.string(),
  changePasswordInstructions: z.string()
})
