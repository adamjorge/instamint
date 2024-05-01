import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { SignUpFormData, handleSubmit } from "@/components/custom/signup/submit-handler"
import { useForm } from "react-hook-form"
import { formSchema } from "@/components/custom/signup/form-schema"
import EmailField from "@/components/custom/signup/formFields/email-field"
import PasswordField from "@/components/custom/signup/formFields/password-field"
import NameField from "@/components/custom/signup/formFields/name-field"
import { useTranslations } from "next-intl"
import LinkButton from "@/components/ui/custom/LinkButton"

export default function SignUpForm() {
  type FieldValues = SignUpFormData
  const t = useTranslations("login")
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitData)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <EmailField control={form.control} />
          <PasswordField control={form.control} />
          <NameField control={form.control} />
          <Button type="submit" className="w-full">
            {t("signUp")}
          </Button>
          <div className="mt-4 text-center">
            <span style={{ marginRight: "0.5em" }}>Already have an account?</span>
            <LinkButton withLocale href="/login">
                Login
            </LinkButton>
          </div>
        </form>
      </Form>
    </main>
  )
}
