import { useTranslations } from "next-intl"

export default function ProfilePrivacyPolicy() {
  const t = useTranslations("uploadOriginalContentTerms")

  return (
    <div className="w-full ml-12 space-y-5">
      <h3 className="text-lg font-bold">{t("title")}</h3>
      <p>{t("firstParagraph")}</p>
      <p>{t("secondParagraph")}</p>
      <p>
        {t("contactInfo")}{" "}
        <a className="italic text-blue-500" href="mailto:instamint.deva.noreply@gmail.com">
          instamint.deva.noreply@gmail.com
        </a>
        .
      </p>
    </div>
  )
}
