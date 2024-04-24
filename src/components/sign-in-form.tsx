"use client"

import { connectionSchema } from "@/validators/schemas/connectionSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

/* eslint-disable */
export default function SignInForm() {
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
    console.log("VALUES : " + JSON.stringify(values))

    await signIn("credentials", {
      email: values.email,
      password: values.password
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mail</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>This is the email you used to register.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
