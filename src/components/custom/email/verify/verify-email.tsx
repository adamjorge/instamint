"use client"

import Form from "@/components/custom/email/verify/form"
import useEmailVerification from "@/components/custom/email/verify/use-email-verification"
import LinkButton from "@/components/ui/custom/link-button"

export default function VerifyEmail() {
  const { isLoading, result, errorMessage } = useEmailVerification()

  return (
    <>
      <div className="mb-4">
        {isLoading ? (
          <Form />
        ) : (
          <>
            {errorMessage ? (
              <div className="text-green-500">{errorMessage}</div>
            ) : (
              <div className="text-green-500">{result}</div>
            )}
          </>
        )}
      </div>
      {!isLoading && !errorMessage && (
        <div className="my-3 w-full">
          <LinkButton withLocale href="/login" className="bg-white py-3 px-2 rounded">
            Back to Login
          </LinkButton>
        </div>
      )}
    </>
  )
}
