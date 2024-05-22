import { Button } from "@/components/ui/button"
import LinkButton from "@/components/ui/custom/link-button"
import { useTranslations } from "next-intl"
import { useCallback } from "react"
import { BsFillFileEarmarkPersonFill } from "react-icons/bs"
import { MdNotificationsActive } from "react-icons/md"
import { toast } from "sonner"

export default function HowToMenu() {
  const t = useTranslations("howToMenu")
  const handleClickOnWIP = useCallback(() => {
    toast.error("This feature is still a work in progress.")
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-medium text-sm">{t("howTo")}</p>
      <div className="mt-3 w-full flex flex-col items-start">
        <LinkButton
          href="/profile/changes"
          withLocale
          className="bg-white text-black hover:bg-light w-full flex justify-start"
        >
          <BsFillFileEarmarkPersonFill size={20} />
          <span className="ml-3">{t("changeProfile")}</span>
        </LinkButton>
        <Button
          className="bg-white text-black hover:bg-light w-full flex justify-start"
          onClick={handleClickOnWIP}
        >
          <MdNotificationsActive size={20} />
          <span className="ml-3">{t("notifications")}</span>
        </Button>
      </div>
    </div>
  )
}
