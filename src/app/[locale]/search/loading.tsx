import { useTranslations } from "next-intl"

export default function Loading() {
  const t = useTranslations()

  return <div className="text-center">{t("loading")}</div>
}
