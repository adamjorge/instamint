import { SignUpFormData } from "@/components/custom/signup/submit-handler"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import { Control } from "react-hook-form"

interface NameFieldProps {
  control: Control<SignUpFormData>
  error?: string | null
}

export default function NameField({ control }: NameFieldProps) {
  const t = useTranslations("signUp")

  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("nameLabel")}</FormLabel>
          <FormControl>
            <Input placeholder={t("nameFieldPlaceholder")} type="text" id="name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
