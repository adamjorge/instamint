import axiosClient from "@/lib/client"
import { signedUrlSchema } from "@/validators/schemas/signedUrlSchema"
import { isAxiosError } from "axios"

export async function getAvatarUrl(minterId: string) {
  try {
    const response = await axiosClient.get(`/minters/pfp/${minterId}`)
    const data = signedUrlSchema.parse(response.data)

    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
