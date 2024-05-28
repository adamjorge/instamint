import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldValues, Path } from "react-hook-form"

interface FileUploadFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
}

export default function FileUploadField<T extends FieldValues>({
  control,
  name
}: FileUploadFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Upload content</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/png, image/webp, audio/ogg, audio/flac"
              onChange={(e) => {
                if (e.target.files) {
                  field.onChange(e.target.files[0])
                }
              }}
              onBlur={field.onBlur}
              ref={field.ref}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
