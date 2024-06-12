import axios, { isAxiosError } from "axios"

export async function postAvatar(file: File, minterId: string) {
  try {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("minterId", minterId)
    const response = await axios.post("/api/minters/pfp", formData, {
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
