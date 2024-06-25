import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { UpdatePasswordFormData } from "@/validators/schemas/update-password/passwordSchema"
import { useTranslations } from "next-intl"
import { Control } from "react-hook-form"

export default function ConfirmPasswordField({
  control,
  error,
  newPassword
}: ConfirmPasswordFieldProps) {
  const t = useTranslations("updatePassword")

  return (
    <FormField
      control={control}
      name="confirmPassword"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("confirmPasswordLabel")}</FormLabel>
          <FormControl>
            <Input
              placeholder={t("confirmPasswordPlaceholder")}
              type="password"
              id="confirmPassword"
              {...field}
            />
          </FormControl>
          {newPassword && field.value !== newPassword && (
            <FormMessage>{t("passwordNotMatch")}</FormMessage>
          )}
          <FormMessage>{error}</FormMessage>
        </FormItem>
      )}
    />
  )
}

type ConfirmPasswordFieldProps = {
  control: Control<UpdatePasswordFormData>
  error?: string | null
  newPassword: string
}
