import { tokenValidationSchema } from "@/validators/schemas/tokenValidationSchema"
import axios, { isAxiosError } from "axios"

export default async function findResetToken(token: string) {
  try {
    const response = await axios.get(`/api/auth/find-reset-query?token=${token}`)
    const tokenValidation = tokenValidationSchema.parse(response)

    return tokenValidation
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
