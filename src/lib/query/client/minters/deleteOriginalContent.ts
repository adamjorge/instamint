import axiosClient from "@/lib/client"
import { isAxiosError } from "axios"

export async function deleteOriginalContent(contentId: number) {
  try {
    await axiosClient.delete(`/delete-original-content/${contentId.toString()}`)
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
