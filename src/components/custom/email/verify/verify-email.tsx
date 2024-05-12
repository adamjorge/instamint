"use client"

import Form from "@/components/custom/email/verify/form"
import useEmailVerification from "@/components/custom/email/verify/use-email-verification"
import ErrorMessage from "@/components/ui/custom/error-message"
import LinkButton from "@/components/ui/custom/link-button"
import SuccessMessage from "@/components/ui/custom/success-message"
import { useTranslations } from "next-intl"
import React from "react"

export default function VerifyEmail() {
  const t = useTranslations("signUp")
  const { isLoading, result, errorMessage } = useEmailVerification()

  return (
    <div className="mb-4">
      {isLoading ? (
        <Form />
      ) : (
        <>
          {errorMessage ? (
            <ErrorMessage message={errorMessage} />
          ) : (
            <SuccessMessage message={result} />
          )}
        </>
      )}
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
