import { useTranslations } from "next-intl"

export default function Cookies() {
  const t = useTranslations("profilePrivacyPolicy")

  return (
    <>
      <h3 className="text-lg font-bold">{t("cookiesTitle")}</h3>
      <p>{t("cookiesIntro")}</p>
      <p>{t("cookiesInfo")}</p>
      <h3 className="text-lg font-bold">{t("cookiesUsageTitle")}</h3>
      <p>{t("cookiesUsageIntro")}</p>
      <ul className="list-disc ml-3">
        <li>{t("cookiesUsage1")}</li>
        <li>{t("cookiesUsage2")}</li>
        <li>{t("cookiesUsage3")}</li>
      </ul>
      <h3 className="text-lg font-bold">{t("cookiesTypesTitle")}</h3>
      <p>{t("cookiesTypesIntro")}</p>
      <ul className="list-disc ml-3">
        <li>{t("cookiesTypes1")}</li>
        <li>{t("cookiesTypes2")}</li>
      </ul>
      <h3 className="text-lg font-bold">{t("cookiesManagementTitle")}</h3>
      <p>{t("cookiesManagementIntro")}</p>
      <h3 className="text-lg font-bold">{t("externalPoliciesTitle")}</h3>
      <p>{t("externalPoliciesIntro")}</p>
    </>
  )
}
