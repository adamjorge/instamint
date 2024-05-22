import { useTranslations } from "next-intl"

export default function Marketing() {
  const t = useTranslations("profilePrivacyPolicy")

  return (
    <>
      <h3 className="text-lg font-bold">{t("marketingTitle")}</h3>
      <p>{t("marketingIntro")}</p>
    </>
  )
}
