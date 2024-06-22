import axiosClient from "@/lib/client"

export default async function findChangeToken(token: string) {
  try {
    await axiosClient.get(`/auth/change-password?token=${token}`)

    return { tokenVerified: true }
  } catch (error) {
    return { tokenVerified: false }
  }
}
