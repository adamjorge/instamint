import axios from "axios"

export default async function findChangeToken(token: string) {
  try {
    await axios.get(`/api/auth/change-password?token=${token}`)

    return { tokenVerified: true }
  } catch (error) {
    return { tokenVerified: false }
  }
}
