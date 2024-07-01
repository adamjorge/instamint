import { useTranslations } from "next-intl"

export default function EmptyStateMessage() {
  const t = useTranslations("deleteOriginalContent")

  return <h3 className="text-center mt-10">{t("noContentTitle")}</h3>
}
