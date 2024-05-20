"use client"

import ConfirmPasswordField from "@/components/custom/reset-password/update-password/form-fields/confirm-password"
import NewPasswordField from "@/components/custom/reset-password/update-password/form-fields/new-password"
import { formSchema } from "@/components/custom/reset-password/update-password/form-schema"
import {
  UpdatePasswordFormData,
  useUpdatePassword
} from "@/components/custom/reset-password/update-password/handle-submit"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"

const UpdatePasswordForm: React.FC = () => {
  const t = useTranslations("updatePassword")
  const form = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    }
  })
  const router = useRouter()
  const { handleSubmit } = useUpdatePassword()
  const onSubmit = async (values: UpdatePasswordFormData) => {
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
          onSubmit={form.handleSubmit(onSubmit)}
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

export default UpdatePasswordForm
