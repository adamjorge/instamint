import { SignUpFormData } from "@/components/custom/signup/submit-handler"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import { Control } from "react-hook-form"

interface EmailFieldProps {
  control: Control<SignUpFormData>
  error?: string | null
}

export default function EmailField({ control, error }: EmailFieldProps) {
  const t = useTranslations("signUp")

  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("emailLabel")}</FormLabel>
          <FormControl>
            <Input placeholder={t("emailFieldPlaceholder")} type="email" id="email" {...field} />
          </FormControl>
          <FormMessage>{error}</FormMessage>
        </FormItem>
      )}
    />
  )
}
