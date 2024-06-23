import axiosClient from "@/lib/client"

export async function postAvatar(file: File, minterId: string) {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("minterId", minterId)

  return await axiosClient.post("/minters/pfp", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}
