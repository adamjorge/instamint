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
import { connectionSchema } from "@/validators/schemas/connectionSchema"
import { useTranslations } from "next-intl"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"

export default function SignInForm({ ...props }: SignInFormProps) {
  const t = useTranslations("login")

  return (
    <Form {...props.form}>
      <form
        onSubmit={props.form.handleSubmit(props.onSubmit)}
        className="flex flex-col justify-center space-y-8 w-full"
      >
        <FormField
          control={props.form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("mail")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>{t("connectionInfo")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={props.form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("password")}</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t("submit")}</Button>
      </form>
    </Form>
  )
}

type SignInFormProps = {
  form: UseFormReturn<z.infer<typeof connectionSchema>>
  onSubmit: (values: z.infer<typeof connectionSchema>) => void
}
