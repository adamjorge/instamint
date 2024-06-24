import axiosClient from "@/lib/client"

export async function confirmChangePassword(
  token: string,
  currentPassword: string,
  newPassword: string
) {
  const data = {
    token,
    currentPassword,
    newPassword
  }

  await axiosClient.patch(`/auth/change-password`, data)
}
