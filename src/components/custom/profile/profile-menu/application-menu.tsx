import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { FaLanguage } from "react-icons/fa6"

export default function ApplicationMenu() {
  const t = useTranslations("applicationMenu")

  return (
    <div className="w-full space-y-5 flex flex-col items-center">
      <p className="text-medium text-sm">{t("yourApplication")}</p>
      <div className="mt-3 w-full flex flex-col items-start">
        <Button className="bg-white text-black hover:bg-light w-full flex justify-start">
          <FaLanguage size={20} />
          <span className="ml-3">{t("language")}</span>
        </Button>
      </div>
    </div>
  )
}
