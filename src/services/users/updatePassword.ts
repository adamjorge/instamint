import { generatePasswordHash } from "@/lib/utils/db"
import { findUserByToken } from "@/services/users/findUserByToken"
import { updateUserPassword } from "@/services/users/updateUserPassword"
import {
  UpdatePasswordFormData,
  UpdatePasswordFormState,
  validateFormData
} from "@/validators/schemas/update-password/passwordValidator"

export async function updatePassword(
  token: string,
  formData: UpdatePasswordFormData
): Promise<UpdatePasswordFormState> {
  try {
    const validation = validateFormData(formData)

    if (Object.keys(validation.errors).length > 0) {
      return validation
    }

    const hashedPassword = await generatePasswordHash(formData.newPassword)
    const user = await findUserByToken(token)

    if (!user.email) {
      return {
        errors: {
          _form: ["User email is null or undefined"]
        }
      }
    }

    await updateUserPassword(user.email, hashedPassword)

    return { errors: {} }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    }

    return {
      errors: {
        _form: ["An unknown error occurred"]
      }
    }
  }
}
