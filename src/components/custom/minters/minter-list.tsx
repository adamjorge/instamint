import { MinterSearchMintersSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import MinterCard from "./minter-card"

export default function MinterList({ minters }: MinterListProps) {
  return (
    <div className="my-1">
      <h3 className="text-center text-2xl">Minters</h3>
      {minters.length === 0 ? (
        <p className="text-center">No minters found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {minters.map((minter) => (
            <MinterCard key={minter.id} {...minter} />
          ))}
        </div>
      )}
    </div>
  )
}

type MinterListProps = {
  minters: MinterSearchMintersSchemaType
}
