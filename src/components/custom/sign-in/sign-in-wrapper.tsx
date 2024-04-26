"use client"

import { connectionSchema } from "@/validators/schemas/connectionSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import SignInForm from "@/components/custom/sign-in/sign-in-form"

export default function SignInWrapper() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const logout = searchParams.get("logout")

  useEffect(() => {
    // Don't remove the setTimeout, it's a way to display toast on page load https://sonner.emilkowal.ski/toast#render-toast-on-page-load
    setTimeout(() => {
      if (error) {
        toast.error("Invalid credentials")
      }

      if (logout) {
        toast.info("You have been logged out")
      }
    })
  }, [error, logout])

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
