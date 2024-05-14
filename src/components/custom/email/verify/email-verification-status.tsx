import Form from "@/components/custom/email/verify/form"
import ErrorMessage from "@/components/ui/custom/error-message"
import SuccessMessage from "@/components/ui/custom/success-message"
import React from "react"

interface EmailVerificationStatusProps {
  isLoading: boolean
  result: string
  errorMessage: string | null
}

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
