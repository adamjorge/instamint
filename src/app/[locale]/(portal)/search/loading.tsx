import { useTranslations } from "next-intl"

export default function Loading() {
  const t = useTranslations("global")

  return <div className="text-center">{t("loading")}</div>
}
