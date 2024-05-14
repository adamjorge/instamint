"use client"

import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"

export default function Form() {
  const t = useTranslations("signUp")
  const searchParams = useSearchParams()
  const verificationSent = searchParams.get("verification_sent") === "true"

  return (
    <div>
      {verificationSent && <div className="text-green-500 mb-4">{t("emailVerificationText")}</div>}
    </div>
  )
}
