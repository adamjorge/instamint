import { z } from "zod"

const updatePasswordSchema = z.object({
  newPassword: z.string().min(6).max(255),
  confirmPassword: z.string().min(6).max(255)
})

interface UpdatePasswordFormState {
  errors: {
    newPassword?: string[]
    confirmPassword?: string[]
    _form?: string[]
  }
}

interface UpdatePasswordFormData {
  newPassword: string
  confirmPassword: string
}

export function validateFormData(formData: UpdatePasswordFormData): UpdatePasswordFormState {
  const result = updatePasswordSchema.safeParse(formData)

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  if (formData.newPassword !== formData.confirmPassword) {
    return {
      errors: {
        confirmPassword: ["New Password and confirm password must match"]
      }
    }
  }

  return { errors: {} }
}

export type { UpdatePasswordFormData, UpdatePasswordFormState }
