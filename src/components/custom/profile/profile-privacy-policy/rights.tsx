import { useTranslations } from "next-intl"

export default function Rights() {
  const t = useTranslations("profilePrivacyPolicy")

  return (
    <>
      <h3 className="text-lg font-bold">{t("rightsTitle")}</h3>
      <p>{t("rightsIntro")}</p>
      <ul className="list-disc ml-3">
        <li>{t("rights1")}</li>
        <li>{t("rights2")}</li>
        <li>{t("rights3")}</li>
        <li>{t("rights4")}</li>
        <li>{t("rights5")}</li>
        <li>{t("rights6")}</li>
      </ul>
      <p>{t("rightsNote")}</p>
      <p className="italic">{t("rightsEmail")}</p>
    </>
  )
}
