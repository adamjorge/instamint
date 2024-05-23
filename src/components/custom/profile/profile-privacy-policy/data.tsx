import { useTranslations } from "next-intl"

export default function Data() {
  const t = useTranslations("profilePrivacyPolicy")

  return (
    <>
      <h3 className="text-lg font-bold">{t("dataCollectedTitle")}</h3>
      <p>{t("dataCollectedIntro")}</p>
      <ul className="list-disc ml-3">
        <li>{t("dataCollected1")}</li>
        <li>{t("dataCollected2")}</li>
        <li>{t("dataCollected3")}</li>
      </ul>
      <h3 className="text-lg font-bold">{t("dataCollectionTitle")}</h3>
      <p>{t("dataCollectionIntro")}</p>
      <ul className="font-italic list-disc ml-3">
        <li>{t("dataCollection1")}</li>
        <li>{t("dataCollection2")}</li>
        <li>{t("dataCollection3")}</li>
        <li>{t("dataCollection4")}</li>
        <li>{t("dataCollection5")}</li>
      </ul>
      <h3 className="text-lg font-bold">{t("dataUsageTitle")}</h3>
      <p>{t("dataUsageIntro")}</p>
      <ul className="list-disc ml-3">
        <li>{t("dataUsage1")}</li>
        <li>{t("dataUsage2")}</li>
        <li>{t("dataUsage3")}</li>
        <li>{t("dataUsage4")}</li>
      </ul>
      <p>{t("dataUsageNote")}</p>
      <h3 className="text-lg font-bold">{t("dataStorageTitle")}</h3>
      <p>{t("dataStorageIntro")}</p>
      <ul>
        <li>
          <span className="font-semibold">{t("dataStorage1Title")}:</span> {t("dataStorage1")}
        </li>
        <li>
          <span className="font-semibold">{t("dataStorage2Title")}:</span> {t("dataStorage2")}
        </li>
      </ul>
      <p>{t("dataStorageDuration")}</p>
    </>
  )
}
