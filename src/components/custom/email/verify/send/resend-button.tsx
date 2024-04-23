import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

export default function ResendButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="mt-2 w-full" disabled={pending}>
      Resend verification link {pending && "..."}
    </Button>
  )
}
