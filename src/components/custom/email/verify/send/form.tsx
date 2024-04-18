"use client"

import { useFormState } from "react-dom"
import ResendButton from "./resend-button"
import { useSearchParams } from "next/navigation"
import { resendVerificationEmail } from "@/actions/auth"

export default function Form() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""
  const verificationSent = Boolean(searchParams.get("verification_sent"))
  const [formState, action] = useFormState(resendVerificationEmail.bind(null, email), "undefined")

  return (
    <>
      {Boolean(formState) && <div className="text-blue-500 mb-4">{formState}</div>}
      {Boolean(verificationSent) && (
        <div className="text-green-500 mb-4">A verification link has been sent to your email.</div>
      )}
      <div>
        <form action={action}>
          <ResendButton />
        </form>
      </div>
    </>
  )
}
