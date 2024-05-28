import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { changeAvatarSchema } from "@/validators/schemas/changeAvatarSchema"
import { useTranslations } from "next-intl"
import { ChangeEvent, useCallback } from "react"
import { ControllerRenderProps, UseFormReturn } from "react-hook-form"
import { z } from "zod"

export default function AvatarUploadForm(props: AvatarUploadFormProps) {
  const t = useTranslations("profileChanges")
  const { form, onSubmit } = props
  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      field: ControllerRenderProps<z.infer<typeof changeAvatarSchema>, "image">
    ) => {
      if (e.target.files && e.target.files.length > 0) {
        field.onChange(e.target.files[0])
      }
    },
    []
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center space-y-3"
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("profilePicture")}</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => {
                    handleChange(e, field)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t("uploadProfilePicture")}</Button>
      </form>
    </Form>
  )
}

type AvatarUploadFormProps = {
  form: UseFormReturn<z.infer<typeof changeAvatarSchema>>
  onSubmit: (values: z.infer<typeof changeAvatarSchema>) => void
}
