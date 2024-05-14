"use client"

import { EmailVerificationStatus } from "@/components/custom/email/verify/email-verification-status"
import useEmailVerification from "@/components/custom/email/verify/use-email-verification"
import LinkButton from "@/components/ui/custom/link-button"
import { useTranslations } from "next-intl"
import React from "react"

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
