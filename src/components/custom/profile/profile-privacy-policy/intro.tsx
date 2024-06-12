import { useTranslations } from "next-intl"

export default function Intro() {
  const t = useTranslations("profilePrivacyPolicy")

  return (
    <>
      <h2 className="text-lg font-bold">{t("title")}</h2>
      <p>{t("intro1")}</p>
      <p>{t("intro2")}</p>
      <h3 className="font-semibold">{t("topicsTitle")}</h3>
      <ul className="space-y-1 font-semibold list-disc ml-3">
        <li>{t("topics1")}</li>
        <li>{t("topics2")}</li>
        <li>{t("topics3")}</li>
        <li>{t("topics4")}</li>
        <li>{t("topics5")}</li>
        <li>{t("topics6")}</li>
        <li>{t("topics7")}</li>
        <li>{t("topics8")}</li>
        <li>{t("topics9")}</li>
        <li>{t("topics10")}</li>
        <li>{t("topics11")}</li>
        <li>{t("topics12")}</li>
        <li>{t("topics13")}</li>
        <li>{t("topics14")}</li>
      </ul>
    </>
  )
}
