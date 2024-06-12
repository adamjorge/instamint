import { useTranslations } from "next-intl"

export default function Contact() {
  const t = useTranslations("profilePrivacyPolicy")

  return (
    <>
      <h3 className="text-lg font-bold">{t("policyChangesTitle")}</h3>
      <p>{t("policyChangesIntro")}</p>
      <h3 className="text-lg font-bold">{t("contactUsTitle")}</h3>
      <p>{t("contactUsIntro")}</p>
      <p>{t("contactUsEmail")}</p>
      <h3 className="text-lg font-bold">{t("contactAuthoritiesTitle")}</h3>
      <p>{t("contactAuthoritiesIntro")}</p>
      <p className="italic">{t("contactAuthoritiesEmail")}</p>
      <p className="italic pb-32">{t("contactAuthoritiesPhone")}</p>
    </>
  )
}
