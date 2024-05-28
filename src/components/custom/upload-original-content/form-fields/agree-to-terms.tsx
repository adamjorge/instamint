import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Control, FieldValues, Path } from "react-hook-form"

interface AgreeToTermsFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
}

export default function AgreeToTermsField<T extends FieldValues>({
  control,
  name
}: AgreeToTermsFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <label>
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
                ref={field.ref}
              />{" "}
              I agree to the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                terms
              </a>
            </label>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
