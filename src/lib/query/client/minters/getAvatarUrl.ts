import axiosClient from "@/lib/client"
import { signedUrlSchema } from "@/validators/schemas/signedUrlSchema"

export async function getAvatarUrl(minterId: string) {
  const response = await axiosClient.get(`/minters/pfp/${minterId}`)

  return signedUrlSchema.parse(response.data)
}
