import axiosClient from "@/lib/client"

export async function uploadContent(file: File, minterId: string) {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("minterId", minterId)

  return await axiosClient.post("/upload-original-content", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}
