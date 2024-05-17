import { UpdatePasswordFormData } from "@/components/custom/reset-password/update-password/handle-submit"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import { Control } from "react-hook-form"

interface UpdatePasswordFieldProps {
  control: Control<UpdatePasswordFormData>
  error?: string | null
}

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
