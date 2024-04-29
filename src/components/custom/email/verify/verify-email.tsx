"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Form from "@/components/custom/email/verify/form"
import useEmailVerification from "@/components/custom/email/verify/use-email-verification"

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
          <Link href="/en/login" className="bg-white py-3 px-2 rounded">
            <Button>Back to Login</Button>
          </Link>
        </div>
      )}
    </>
  )
}
