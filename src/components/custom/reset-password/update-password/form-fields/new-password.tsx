import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { UpdatePasswordFormData } from "@/validators/schemas/update-password/passwordSchema"
import { useTranslations } from "next-intl"
import { Control } from "react-hook-form"

export default function NewPasswordField({ control }: UpdatePasswordFieldProps) {
  const t = useTranslations("updatePassword")

  return (
    <FormField
      control={control}
      name="newPassword"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("newPasswordLabel")}</FormLabel>
          <FormControl>
            <Input
              placeholder={t("newPasswordLabel")}
              type="password"
              id="newPassword"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

type UpdatePasswordFieldProps = {
  control: Control<UpdatePasswordFormData>
  error?: string | null
}
