import { SignUpFormData } from "@/components/custom/sign-up/submit-handler"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import { Control } from "react-hook-form"

interface PasswordFieldProps {
  control: Control<SignUpFormData>
  error?: string | null
}

export default function PasswordField({ control }: PasswordFieldProps) {
  const t = useTranslations("signUp")

  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("passwordLabel")}</FormLabel>
          <FormControl>
            <Input
              placeholder={t("passwordFieldPlaceholder")}
              type="password"
              id="password"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
