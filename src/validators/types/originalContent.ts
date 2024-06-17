import { OriginalContentSchemaType } from "@/validators/schemas/original-contents/fetchOriginalContents"

export type OriginalContentGridProps = {
  contents: OriginalContentSchemaType[]
  onDelete: (contentId: number) => void
}

export type OriginalContentCardProps = {
  content: OriginalContentSchemaType
  onDelete: (contentId: number) => void
}
