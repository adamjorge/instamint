"use client"

import { Button } from "@/components/ui/button"
import LinkButton from "@/components/ui/custom/link-button"
import { useTranslations } from "next-intl"
import { useCallback } from "react"
import { FaLanguage } from "react-icons/fa6"
import { MdPolicy } from "react-icons/md"
import { toast } from "sonner"

export default function ApplicationMenu() {
  const t = useTranslations("applicationMenu")
  const handleClickOnWIP = useCallback(() => {
    toast.error("This feature is still a work in progress.")
  }, [])

  return (
    <div className="w-full space-y-5 flex flex-col items-center">
      <p className="text-medium text-sm">{t("yourApplication")}</p>
      <div className="mt-3 w-full flex flex-col items-start">
        <Button
          className="bg-white text-black hover:bg-light w-full flex justify-start"
          onClick={handleClickOnWIP}
        >
          <FaLanguage size={20} />
          <span className="ml-3">{t("language")}</span>
        </Button>
        <LinkButton
          withLocale
          href="/profile/privacy-policy"
          className="bg-white text-black hover:bg-light w-full flex justify-start"
        >
          <MdPolicy size={20} />
          <span className="ml-3">{t("privacyPolicy")}</span>
        </LinkButton>
      </div>
    </div>
  )
}
