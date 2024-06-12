import TeaBagSearchCard from "@/components/custom/teabags/teabag-search-card"
import { TeabagsSearchTeabagsSchemaType } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"
import { useTranslations } from "next-intl"

export default function TeaBagSearchList({ teabags }: TeaBagListProps) {
  const t = useTranslations("search")

  return (
    <div className="my-1">
      <h3 className="text-center text-2xl">Tea Bags</h3>
      {teabags.length === 0 ? (
        <p className="text-center">{t("noSearchResultsFor", { type: "teabags" })}</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {teabags.map((teabag) => (
            <TeaBagSearchCard key={teabag.id} {...teabag} />
          ))}
        </div>
      )}
    </div>
  )
}

type TeaBagListProps = {
  teabags: TeabagsSearchTeabagsSchemaType
}
