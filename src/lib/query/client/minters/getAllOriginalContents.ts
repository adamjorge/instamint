import axiosClient from "@/lib/client"
import { originalContentsResponseSchema } from "@/validators/schemas/original-contents/fetchOriginalContents"

export default async function fetchOriginalContent(minterId: number) {
  const response = await axiosClient.get(`/original-contents/${minterId.toString()}`)

  return originalContentsResponseSchema.parse(response.data)
}
