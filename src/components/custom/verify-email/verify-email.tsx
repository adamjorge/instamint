"use client"

import { EmailVerificationStatus } from "@/components/custom/verify-email/email-verification-status"
import LinkButton from "@/components/ui/custom/link-button"
import useEmailVerification from "@/hooks/useEmailVerification"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export default function VerifyEmail() {
  const t = useTranslations("signUp")
  const searchParams = useSearchParams()
  const verificationSent = searchParams.get("verification_sent")
  const { isLoading, result, errorMessage } = useEmailVerification()

  useEffect(() => {
    if (verificationSent) {
      toast.success(t("emailVerificationText"))
    }
  }, [t, verificationSent])

  return (
    <div className="flex flex-col items-center pt-10 space-y-3">
      <EmailVerificationStatus isLoading={isLoading} result={result} errorMessage={errorMessage} />
      <LinkButton withLocale href="/login">
        {t("backToLoginButton")}
      </LinkButton>
    </div>
  )
}
