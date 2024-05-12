import { SignUpFormData } from "@/components/custom/sign-up/submit-handler"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"

interface NameFieldProps {
  control: Control<SignUpFormData>
  error?: string | null
}

export default function NameField({ control }: NameFieldProps) {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input placeholder="Enter your name" type="text" id="name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
