import { z } from "zod"

export const updatePasswordSchema = z
  .object({
    newPassword: z.string().min(6).max(255),
    confirmPassword: z.string().min(6).max(255)
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "New Password and Confirm Password must match"
  })

export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>

export type UpdatePasswordFormState = {
  errors: {
    newPassword?: string[]
    confirmPassword?: string[]
    _form?: string[]
  }
}
