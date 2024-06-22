import axios, { isAxiosError } from "axios"

export async function deleteOriginalContent(contentId: number) {
  try {
    await axios.delete(`/api/delete-original-content/${contentId.toString()}`)
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
