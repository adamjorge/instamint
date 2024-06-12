import LinkButton from "@/components/ui/custom/link-button"
import { useTranslations } from "next-intl"
import { BsFillFileEarmarkPersonFill } from "react-icons/bs"
import { MdNotificationsActive } from "react-icons/md"

export default function HowToMenu() {
  const t = useTranslations("howToMenu")

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-medium text-sm" aria-label="how to use instamint">
        {t("howTo")}
      </p>
      <div className="mt-3 w-full flex flex-col items-start">
        <LinkButton
          href="/profile/changes"
          withLocale
          className="bg-white text-black hover:bg-light w-full flex justify-start"
          aria-label="edit profile"
        >
          <BsFillFileEarmarkPersonFill size={20} />
          <span className="ml-3">{t("changeProfile")}</span>
        </LinkButton>
        <LinkButton
          href="/profile/notifications"
          withLocale
          className="bg-white text-black hover:bg-light w-full flex justify-start"
          aria-label="notifications"
        >
          <MdNotificationsActive size={20} />
          <span className="ml-3">{t("notifications")}</span>
        </LinkButton>
      </div>
    </div>
  )
}
