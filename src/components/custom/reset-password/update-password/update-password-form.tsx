"use client"

import ConfirmPasswordField from "@/components/custom/reset-password/update-password/form-fields/confirm-password"
import NewPasswordField from "@/components/custom/reset-password/update-password/form-fields/new-password"
import { formSchema } from "@/components/custom/reset-password/update-password/form-schema"
import {
  UpdatePasswordFormData,
  handleSubmit
} from "@/components/custom/reset-password/update-password/handle-submit"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { FormProvider, useForm } from "react-hook-form"

export default function UpdatePasswordForm() {
  type FieldValues = UpdatePasswordFormData
  const t = useTranslations("updatePassword")
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    }
  })
  const router = useRouter()
  const submitData = async (values: UpdatePasswordFormData) => {
    const success = await handleSubmit(values)

    if (success) {
      form.reset()
      router.push("/login")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(submitData)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <NewPasswordField control={form.control} />
          <ConfirmPasswordField control={form.control} newPassword={form.watch("newPassword")} />
          <Button type="submit" className="w-full">
            {t("updateButton")}
          </Button>
        </form>
      </FormProvider>
    </main>
  )
}
