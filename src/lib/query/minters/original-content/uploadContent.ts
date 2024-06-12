import axios, { isAxiosError } from "axios"

export async function uploadContent(file: File, minterId: string) {
  try {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("minterId", minterId)

    const response = await axios.post("/api/upload-original-content", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })

    return response
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
