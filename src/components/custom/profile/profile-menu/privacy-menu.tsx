import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { useCallback } from "react"
import { MdPrivacyTip } from "react-icons/md"
import { toast } from "sonner"

export default function PrivacyMenu() {
  const t = useTranslations("privacyMenu")
  const handleClickOnWIP = useCallback(() => {
    toast.error("This feature is still a work in progress.")
  }, [])

  return (
    <div className="w-full space-y-5 flex flex-col items-center">
      <p className="text-medium text-sm">{t("whoCanSee")}</p>
      <div className="mt-3 w-full flex flex-col items-start">
        <Button
          className="bg-white text-black hover:bg-light w-full flex justify-start"
          onClick={handleClickOnWIP}
        >
          <MdPrivacyTip size={20} />
          <span className="ml-3">{t("privacy")}</span>
        </Button>
      </div>
    </div>
  )
}
