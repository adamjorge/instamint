import { SignUpFormData } from "@/components/custom/sign-up/submit-handler"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"

interface EmailFieldProps {
  control: Control<SignUpFormData>
  error?: string | null
}

export default function EmailField({ control, error }: EmailFieldProps) {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="Enter your email" type="email" id="email" {...field} />
          </FormControl>
          <FormMessage>{error}</FormMessage>
        </FormItem>
      )}
    />
  )
}
