"use client"

import LinkButton from "@/components/ui/custom/link-button"
import { useTranslations } from "next-intl"
import { useEffect } from "react"
import { toast } from "sonner"

export default function VerifyEmail() {
  const t = useTranslations("signUp")

  useEffect(() => {
    toast.success(t("emailVerificationText"))
  }, [t])

  return (
    <div className="flex w-full justify-center">
      <LinkButton withLocale href="/login">
        {t("backToLoginButton")}
      </LinkButton>
    </div>
  )
}
