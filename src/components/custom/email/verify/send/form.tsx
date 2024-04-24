"use client"

import { useSearchParams } from "next/navigation"

export default function Form() {
  const searchParams = useSearchParams()
  const verificationSent = Boolean(searchParams.get("verification_sent"))

  return (
    <>
      <div>
        {Boolean(verificationSent) && (
          <div className="text-green-500 mb-4">
            A verification link has been sent to your email.
          </div>
        )}
      </div>
    </>
  )
}
