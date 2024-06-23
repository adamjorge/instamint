import axiosClient from "@/lib/client"

export async function createChangePassword(email: string, locale: string) {
  const data = {
    email,
    locale
  }

  return await axiosClient.post(`/auth/change-password`, data)
}
