"use client"

import { formSchema } from "@/components/custom/sign-up/form-schema"
import EmailField from "@/components/custom/sign-up/formFields/email-field"
import NameField from "@/components/custom/sign-up/formFields/name-field"
import PasswordField from "@/components/custom/sign-up/formFields/password-field"
import { SignUpFormData, handleSubmit } from "@/components/custom/sign-up/submit-handler"
import { Button } from "@/components/ui/button"
import LinkButton from "@/components/ui/custom/link-button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"

export default function SignUpForm() {
  type FieldValues = SignUpFormData
  const t = useTranslations("signUp")
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema(t)),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    }
  })
  const submitData = async (values: SignUpFormData) => {
    await handleSubmit(values)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitData)}
          className="max-w-md w-full flex flex-col gap-5"
        >
          <EmailField control={form.control} />
          <PasswordField control={form.control} />
          <NameField control={form.control} />
          <Button type="submit" className="w-full">
            {t("signUpButton")}
          </Button>
          <div className="flex flex-col space-y-3 text-center">
            <span>{t("loginQuestion")}</span>
            <LinkButton withLocale href="/login">
              {t("loginButton")}
            </LinkButton>
          </div>
        </form>
      </Form>
    </div>
  )
}
