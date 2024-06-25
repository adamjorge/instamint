import { Checkbox } from "@/components/ui/checkbox"
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
            <div className="flex space-x-3">
              <Checkbox
                checked={field.value}
                onChange={field.onChange}
                ref={field.ref}
                className="mt-1"
              />
              <div>
                <span>{t("agreeText")}</span>
                <LinkButton
                  href="/upload-original-content/terms"
                  className="text-blue-500 text-md -mt-3 p-1 hover:bg-white bg-white"
                  withLocale
                >
                  <span>{t("termsLink")}</span>
                </LinkButton>
              </div>
            </div>
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
