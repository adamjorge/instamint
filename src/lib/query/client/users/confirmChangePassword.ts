import axios from "axios"

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

  await axios.patch(`/api/auth/change-password`, data)
}
