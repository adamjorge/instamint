import ChangePasswordField from "@/components/custom/change-password/change-password-field"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { changePasswordSchema } from "@/validators/schemas/changePasswordSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { UseMutationResult } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function ChangePasswordForm(props: ChangePasswordFormProps) {
  const t = useTranslations("changePassword")
  const form = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
  })
  function onSubmit(values: z.infer<typeof changePasswordSchema>) {
    props.mutation.mutate(values)
  }

  return (
    <div className="w-full flex justify-center mt-32">
      <div className="flex flex-col items-center space-y-6 w-2/3 xl:w-1/2">
        <Image
          src="/instamint.svg"
          alt="Instamint Logo"
          className="dark:invert"
          width={60}
          height={25}
          priority
        />
        <h2 className="font-bold text-2xl">{t("changePasswordTitle")}</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-center space-y-8 w-full"
          >
            <ChangePasswordField
              form={form}
              name="currentPassword"
              label={t("currentPassword")}
              description={t("currentPasswordDescription")}
            />
            <ChangePasswordField form={form} name="newPassword" label={t("newPassword")} />
            <ChangePasswordField form={form} name="confirmPassword" label={t("confirmPassword")} />
            <Button className="bg-sea hover:bg-spruce" type="submit">
              {t("changePasswordTitle")}
            </Button>
          </form>
        </Form>
        <Button className="bg-sea hover:bg-spruce" onClick={props.handleClickOnLoginButton}>
          {t("backToLogin")}
        </Button>
      </div>
    </div>
  )
}

type ChangePasswordFormProps = {
  mutation: UseMutationResult<
    void,
    Error,
    {
      currentPassword: string
      newPassword: string
    }
  >
  handleClickOnLoginButton: () => void
}
