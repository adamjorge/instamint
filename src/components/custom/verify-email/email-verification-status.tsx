import Form from "@/components/custom/verify-email/form"
import ErrorMessage from "@/components/ui/custom/error-message"
import SuccessMessage from "@/components/ui/custom/success-message"

export function EmailVerificationStatus({
  isLoading,
  result,
  errorMessage
}: EmailVerificationStatusProps) {
  if (isLoading) {
    return <Form />
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />
  }

  return <SuccessMessage message={result} />
}

interface EmailVerificationStatusProps {
  isLoading: boolean
  result: string
  errorMessage: string | null
}
