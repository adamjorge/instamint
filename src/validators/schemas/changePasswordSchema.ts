import { z } from "zod"

export const changePasswordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string().min(3),
  confirmPassword: z.string().min(3)
})
