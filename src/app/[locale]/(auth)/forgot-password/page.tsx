/* eslint-disable */
"use client"

import { Button } from "@/components/ui/button"
import LinkButton from "@/components/ui/custom/link-button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createResetPassword } from "@/lib/query/users/createResetPassword"
import { forgotPasswordSchema } from "@/validators/schemas/forgotPasswordSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocale } from "next-intl"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

/* eslint-disable */

export default function ForgotPasswordPage() {
  const locale = useLocale()
  const router = useRouter()
  const searchParams = useSearchParams()
  const emailSent = searchParams.get("email-sent")
  const emailNotSent = searchParams.get("email-not-sent")

  useEffect(() => {
    // Don't remove the setTimeout, it's a way to display toast on page load after the first render https://sonner.emilkowal.ski/toast#render-toast-on-page-load
    setTimeout(() => {
      if (emailSent) {
        toast.info("An email has been sent to you with instructions on how to reset your password.")
      }

      if (emailNotSent) {
        toast.error("Email not sent. Your email is not registered in our system.")
      }
    })
  }, [emailSent, emailNotSent])

  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    try {
      await createResetPassword(values.email, locale)
      router.push(`/${locale}/forgot-password?email-sent=true`)
    } catch (error) {
      router.push(`/${locale}/forgot-password?email-not-sent=true`)
    }
  }
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  })

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
        <h2 className="font-bold text-2xl">Forgot your password?</h2>
        <p>
          Enter the email address associated with your account, and we'll send you a link to reset
          your password.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full bg-sea hover:bg-spruce" type="submit">
              Send reset link
            </Button>
          </form>
        </Form>
        <LinkButton withLocale href="/login" className="w-full text-sea bg-white hover:bg-white">
          Back to sign in
        </LinkButton>
      </div>
    </div>
  )
}
