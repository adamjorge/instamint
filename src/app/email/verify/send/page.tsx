import VerifyEmail from "@/components/custom/email/verify/verify-email"
import Loading from "@/components/ui/loading"
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
