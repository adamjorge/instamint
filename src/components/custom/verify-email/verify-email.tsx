"use client"

import { EmailVerificationStatus } from "@/components/custom/verify-email/email-verification-status"
import LinkButton from "@/components/ui/custom/link-button"
import useEmailVerification from "@/hooks/useEmailVerification"
import { useTranslations } from "next-intl"

export default function VerifyEmail() {
  const t = useTranslations("signUp")
  const { isLoading, result, errorMessage } = useEmailVerification()

  return (
    <div className="mb-4">
      <EmailVerificationStatus isLoading={isLoading} result={result} errorMessage={errorMessage} />
      {!isLoading && !errorMessage && (
        <div className="my-3 w-full">
          <LinkButton withLocale href="/login" className="bg-black py-3 px-2 rounded">
            {t("backToLoginButton")}
          </LinkButton>
        </div>
      )}
    </div>
  )
}
