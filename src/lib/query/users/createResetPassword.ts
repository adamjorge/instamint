import axios, { isAxiosError } from "axios"

export async function createResetPassword(email: string, locale: string) {
  const data = {
    email,
    locale
  }

  try {
    const response = await axios.post(`/api/auth/reset-password`, data)

    return response
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }

    throw new Error(error as string)
  }
}
