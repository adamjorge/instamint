import axios from "axios"
import { toast } from "sonner"

export interface UpdatePasswordFormData {
  newPassword: string
  confirmPassword: string
}

export async function handleSubmit(values: UpdatePasswordFormData) {
  try {
    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords do not match")
    } else {
      const searchParams = new URLSearchParams(window.location.search)
      const token = searchParams.get("token")

      if (!token) {
        throw new Error("Token not found in URL parameters")
      }

      const response = await axios.post("/api/update-password", {
        token,
        formData: values
      })

      if (response.status !== 200) {
        throw new Error("Password update failed")
      }

      toast.success("Password updated successfully")
    }
  } catch (e) {
    toast.error("Oops! something went wrong")
  }
}
