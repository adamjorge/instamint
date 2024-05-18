import axios from "axios"
import { toast } from "sonner"

export interface UpdatePasswordFormData {
  newPassword: string
  confirmPassword: string
}

export async function handleSubmit(values: UpdatePasswordFormData): Promise<boolean> {
  try {
    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords do not match")

      return false
    }

    const searchParams = new URLSearchParams(window.location.search)
    const token = searchParams.get("token")

    if (!token) {
      throw new Error("Token not found in URL parameters")
    }

    const response = await axios.post("/api/auth/update-password", {
      token,
      formData: values
    })

    if (response.status !== 200) {
      throw new Error("Password update failed")
    }

    toast.success("Password updated successfully")

    return true
  } catch (e) {
    toast.error("Something went wrong!")

    return false
  }
}
