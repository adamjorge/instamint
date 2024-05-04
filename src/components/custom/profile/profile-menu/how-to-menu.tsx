import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { BsFillFileEarmarkPersonFill } from "react-icons/bs"
import { MdNotificationsActive } from "react-icons/md"

export default function HowToMenu() {
  const t = useTranslations("howToMenu")

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-medium text-sm">{t("howTo")}</p>
      <div className="mt-3 w-full flex flex-col items-start">
        <Button className="bg-white text-black hover:bg-light w-full flex justify-start">
          <BsFillFileEarmarkPersonFill size={20} />
          <span className="ml-3">{t("changeProfile")}</span>
        </Button>
        <Button className="bg-white text-black hover:bg-light w-full flex justify-start">
          <MdNotificationsActive size={20} />
          <span className="ml-3">{t("notifications")}</span>
        </Button>
      </div>
    </div>
  )
}
