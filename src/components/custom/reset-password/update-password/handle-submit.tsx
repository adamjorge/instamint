import axios from "axios"
import { useTranslations } from "next-intl"
import { toast } from "sonner"

export interface UpdatePasswordFormData {
  newPassword: string
  confirmPassword: string
}

export function useUpdatePassword() {
  const t = useTranslations("updatePassword")
  const g = useTranslations("global")
  const handleSubmit = async (values: UpdatePasswordFormData): Promise<boolean> => {
    try {
      if (values.newPassword !== values.confirmPassword) {
        toast.error(t("passwordNotMatch"))

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

      toast.success(t("successMessage"))

      return true
    } catch (e) {
      toast.error(g("error"))

      return false
    }
  }

  return {
    handleSubmit
  }
}
