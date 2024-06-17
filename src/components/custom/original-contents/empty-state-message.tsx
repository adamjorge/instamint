import { useTranslations } from "next-intl"

export default function EmptyStateMessage() {
  const t = useTranslations("deleteOriginalContent")

  return <div className="text-center text-xl mt-10">{t("noContentTitle")}</div>
}
