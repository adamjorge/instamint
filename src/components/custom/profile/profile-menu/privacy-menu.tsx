import LinkButton from "@/components/ui/custom/link-button"
import { useTranslations } from "next-intl"
import { MdPrivacyTip } from "react-icons/md"

export default function PrivacyMenu() {
  const t = useTranslations("privacyMenu")

  return (
    <div className="w-full space-y-5 flex flex-col items-center">
      <p className="text-medium text-sm" aria-label="who can see my profile">
        {t("whoCanSee")}
      </p>
      <div className="mt-3 w-full flex flex-col items-start">
        <LinkButton
          withLocale
          className="bg-white text-black hover:bg-light w-full flex justify-start"
          aria-label="privacy details"
          href="/profile/privacy"
        >
          <MdPrivacyTip size={20} />
          <span className="ml-3">{t("privacy")}</span>
        </LinkButton>
      </div>
    </div>
  )
}
