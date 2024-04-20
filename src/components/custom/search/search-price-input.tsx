import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SearchPriceInput({ ...props }: SearchPriceInputProps) {
  const { label, value, setValue, placeholder } = props

  return (
    <div className="flex flex-wrap justify-center">
      <Label className="my-3" htmlFor={label}>
        {label}
      </Label>
      <Input
        type="number"
        placeholder={placeholder}
        className="w-3/4"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}

type SearchPriceInputProps = {
  label: string
  value: string
  setValue: (value: string) => void
  placeholder: string
}
