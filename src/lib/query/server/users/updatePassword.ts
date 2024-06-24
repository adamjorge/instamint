import { findUserByToken } from "@/lib/query/server/users/findUserByToken"
import { updateUserPassword } from "@/lib/query/server/users/updateUserPassword"
import { generatePasswordHash } from "@/lib/utils/db"
import { validateFormData } from "@/lib/utils/update-password/validateFormData"
import {
  UpdatePasswordFormData,
  UpdatePasswordFormState
} from "@/validators/schemas/update-password/passwordSchema"

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
