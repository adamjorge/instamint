import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { MdPrivacyTip } from "react-icons/md"

export default function PrivacyMenu() {
  const t = useTranslations("privacyMenu")

  return (
    <div className="w-full space-y-5 flex flex-col items-center">
      <p className="text-medium text-sm">{t("whoCanSee")}</p>
      <div className="mt-3 w-full flex flex-col items-start">
        <Button className="bg-white text-black hover:bg-light w-full flex justify-start">
          <MdPrivacyTip size={20} />
          <span className="ml-3">{t("privacy")}</span>
        </Button>
      </div>
    </div>
  )
}
