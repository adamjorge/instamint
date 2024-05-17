import { UpdatePasswordFormData } from "@/components/custom/reset-password/update-password/handle-submit"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import { Control } from "react-hook-form"

interface ConfirmPasswordFieldProps {
  control: Control<UpdatePasswordFormData>
  error?: string | null
  newPassword: string
}

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
            <FormMessage>Passwords do not match</FormMessage>
          )}
          <FormMessage>{error}</FormMessage>
        </FormItem>
      )}
    />
  )
}
