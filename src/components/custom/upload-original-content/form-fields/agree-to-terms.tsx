import LinkButton from "@/components/ui/custom/link-button"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useTranslations } from "next-intl"
import { Control, FieldValues, Path } from "react-hook-form"

export default function AgreeToTermsField<T extends FieldValues>({
  control,
  name
}: AgreeToTermsFieldProps<T>) {
  const t = useTranslations("uploadOriginalContent")

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <label>
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
                ref={field.ref}
              />{" "}
              {t("agreeText")}
              <LinkButton
                href="/upload-original-content/terms"
                className="text-blue-500 bg-white"
                withLocale
              >
                {t("termsLink")}
              </LinkButton>
            </label>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

type AgreeToTermsFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
}
