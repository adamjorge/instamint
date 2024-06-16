import OriginalContentCard from "@/components/custom/original-contents/original-content-card"
import { OriginalContentGridProps } from "@/validators/types/originalContent"

export default function OriginalContentGrid({ contents, onDelete }: OriginalContentGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-8 mb-20">
      {contents.map((content) => (
        <OriginalContentCard key={content.id} content={content} onDelete={onDelete} />
      ))}
    </div>
  )
}
