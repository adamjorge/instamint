import MinterWrapper from "@/components/custom/minters/minter-wrapper"
import { MinterSearchMintersSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import type { Session } from "next-auth"
import { useTranslations } from "next-intl"

export default function MinterSearchList({ minters, session }: MinterListProps) {
  const t = useTranslations("search")

  return (
    <div className="mb-1">
      <h3 className="text-center text-2xl">Minters</h3>
      {minters.length === 0 ? (
        <p className="text-center">{t("noSearchResultsFor", { type: "Minters" })}</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
          {minters.map((minter) => (
            <MinterWrapper key={minter.id} session={session} minter={minter} />
          ))}
        </div>
      )}
    </div>
  )
}

type MinterListProps = {
  minters: MinterSearchMintersSchemaType
  session: Session
}
