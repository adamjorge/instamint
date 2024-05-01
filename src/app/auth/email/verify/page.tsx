"use client"

import VerifyEmail from "@/components/custom/email/verify/verify-email"
import Loading from "@/app/auth/email/verify/loading"
import { Suspense } from "react"

export default function Verify() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col">
        <VerifyEmail />
      </div>
    </Suspense>
  )
}
