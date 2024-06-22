import axiosClient from "@/lib/client"

export async function createChangePassword(email: string, locale: string) {
  const data = {
    email,
    locale
  }

  try {
    const response = await axiosClient.post(`/auth/change-password`, data)

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
