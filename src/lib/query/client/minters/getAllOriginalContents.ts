import axiosClient from "@/lib/client"
import { originalContentsResponseSchema } from "@/validators/schemas/original-contents/fetchOriginalContents"

export default async function fetchOriginalContent(minterId: number) {
  try {
    const response = await axiosClient.get(`/original-contents/${minterId.toString()}`)
    const originalContents = originalContentsResponseSchema.parse(response.data)

    return originalContents
  } catch (error) {
    throw new Error(error as string)
  }
}
