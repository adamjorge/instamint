import { z } from "zod"

export const UpdatePasswordSchema = z.object({
  newPasswordLabel: z.string(),
  newPasswordPlaceholder: z.string(),
  confirmPasswordLabel: z.string(),
  confirmPasswordPlaceholder: z.string(),
  passwordNotMatch: z.string(),
  updateButton: z.string(),
  successMessage: z.string(),
  deleteAccountDescription: z.string(),
  changeMyPassword: z.string()
})
