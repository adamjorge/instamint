"use client"

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
import { requestPasswordReset } from "@/lib/utils/reset-password/passwordResetService"
import { formSchema } from "@/validators/schemas/reset-password/resetPasswordSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function ResetPasswordForm() {
  const t = useTranslations("resetPassword")
  const g = useTranslations("global")
  const form = useForm<ResetFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  })
  const handleSubmit = async (values: ResetFormData) => {
    try {
      const { success } = await requestPasswordReset(values.email)

      if (success) {
        toast.success(t("successEmailMessage"))
      } else {
        toast.error(t("emailNotExistMessage"))
      }
    } catch (e) {
      toast.error(g("error"))
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("mail")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("emailPlaceholder")} type="email" id="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {t("resetButton")}
          </Button>
        </form>
      </Form>
    </div>
  )
}

interface ResetFormData {
  email: string
}
