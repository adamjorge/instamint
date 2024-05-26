import axios from "axios"

export async function createChangePassword(email: string, locale: string) {
  const data = {
    email,
    locale
  }

  try {
    const response = await axios.post(`/api/auth/change-password`, data)

    return response
  } catch (error) {
    throw new Error(error as string)
  }
}
