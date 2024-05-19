import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { changePasswordSchema } from "@/validators/schemas/changePasswordSchema"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"

export default function ChangePasswordField(props: ChangePasswordFieldProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input {...field} type="password" />
          </FormControl>
          {props.description && <FormDescription>{props.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

type ChangePasswordFieldProps = {
  form: UseFormReturn<z.infer<typeof changePasswordSchema>>
  name: "currentPassword" | "newPassword" | "confirmPassword"
  label: string
  description?: string
}
