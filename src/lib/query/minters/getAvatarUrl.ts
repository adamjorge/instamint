import { signedUrlSchema } from "@/validators/schemas/signedUrlSchema"
import axios, { isAxiosError } from "axios"

export async function getAvatarUrl(minterId: string) {
  try {
    const response = await axios.get(`/api/minters/avatar/${minterId}`)
    const data = signedUrlSchema.parse(response)

    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
