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
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

export interface ResetFormData {
  email: string
}

export const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
})

export default function ResetPasswordForm() {
  const t = useTranslations("resetPassword")
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
        toast.success("A verification link has been sent to your email.")
      } else {
        toast.error("Oops! email doesn't exist")
      }
    } catch (e) {
      toast.error("Oops! something went wrong")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </main>
  )
}
