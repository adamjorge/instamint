import { originalContentsResponseSchema } from "@/validators/schemas/original-contents/fetchOriginalContents"
import axios from "axios"

export default async function fetchOriginalContent(minterId: number) {
  try {
    const response = await axios.get(`/api/original-contents/${minterId.toString()}`)
    const originalContents = originalContentsResponseSchema.parse(response.data)

    return originalContents
  } catch (error) {
    throw new Error(error as string)
  }
}
