import type {
  UpdatePasswordFormData,
  UpdatePasswordFormState
} from "@/validators/schemas/update-password/passwordSchema"
import { updatePasswordSchema } from "@/validators/schemas/updatePasswordSchema"

export function validateFormData(formData: UpdatePasswordFormData): UpdatePasswordFormState {
  const result = updatePasswordSchema.safeParse(formData)

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  return { errors: {} }
}
