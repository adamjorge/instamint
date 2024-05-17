"use client"

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
import findChangeToken from "@/lib/query/users/findChangeToken"
import { changePasswordSchema } from "@/validators/schemas/changePasswordSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

/* eslint-disable */

export default function ChangePasswordView(props: ChangePasswordViewProps) {
  const router = useRouter()
  const { token } = props
  const mutation = useMutation({})
  const form = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
  })
  async function onSubmit(values: z.infer<typeof changePasswordSchema>) {
    console.log(values)
  }
  const { data, error, isPending } = useQuery({
    queryKey: ["resetToken", token],
    queryFn: () => findChangeToken(token)
  })

  if (isPending) {
    return <div className="text-center">Loading...</div>
  }

  if (error) {
    return <div className="text-center">Error</div>
  }

  if (!data.tokenVerified) {
    router.push("/login?error=failedTokenVerification")
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
        <h2 className="font-bold text-2xl">Change my password</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-center space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormDescription>
                    The current password you're using to connect yourself to Instamint
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-sea hover:bg-spruce" type="submit">
              Change my password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

type ChangePasswordViewProps = {
  token: string
}
