"use client"

import SignInForm from "@/components/custom/sign-in/sign-in-form"
import { connectionSchema } from "@/validators/schemas/connectionSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

export default function SignInWrapper() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const deleted = searchParams.get("deleted")
  const t = useTranslations("global")

  useEffect(() => {
    // Don't remove the setTimeout, it's a way to display toast on page load after the first render https://sonner.emilkowal.ski/toast#render-toast-on-page-load
    setTimeout(() => {
      if (error) {
        toast.error(t("invalidCredentials"))
      }

      if (deleted) {
        toast.info(t("deletedAccount"))
      }
    })
  }, [error, deleted, t])

  const form = useForm<z.infer<typeof connectionSchema>>({
    resolver: zodResolver(connectionSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  async function onSubmit(values: z.infer<typeof connectionSchema>) {
    await signIn(
      "credentials",
      {
        email: values.email,
        password: values.password
      },
      {
        callbackUrl: "/"
      }
    )
  }

  const SignInFormProps = {
    form,
    onSubmit
  }

  return <SignInForm {...SignInFormProps} />
}
