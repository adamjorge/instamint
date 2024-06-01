import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import React, { useCallback } from "react"
import { Control, ControllerRenderProps, FieldValues, Path } from "react-hook-form"

interface FileUploadFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
}

export default function FileUploadField<T extends FieldValues>({
  control,
  name
}: FileUploadFieldProps<T>) {
  const t = useTranslations("uploadOriginalContent")
  const handleChange = useCallback(
    (field: ControllerRenderProps<T, Path<T>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        field.onChange(e.target.files[0])
      }
    },
    []
  )

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("uploadLabel")}</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/png, image/webp, audio/ogg, audio/flac"
              onChange={handleChange(field)}
              onBlur={field.onBlur}
              ref={field.ref}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
