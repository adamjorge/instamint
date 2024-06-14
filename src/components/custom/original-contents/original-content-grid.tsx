import DeleteOriginalContentButton from "@/components/custom/original-contents/handle-delete-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RelativeTimeFormatter } from "@/components/ui/custom/relative-time-formatter"
import { OriginalContentSchemaType } from "@/validators/schemas/original-contents/fetchOriginalContents"
import { useTranslations } from "next-intl"
import Image from "next/image"

type OriginalContentGridProps = {
  contents: OriginalContentSchemaType[]
  onDelete: (contentId: number) => void
}

export default function OriginalContentGrid({ contents, onDelete }: OriginalContentGridProps) {
  const t = useTranslations("deleteOriginalContent")

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-8 mb-20">
      {contents.map((oc) => (
        <Card key={oc.id} className="bg-muted ml-2 mr-2 md:mr-2 xl:mr-3">
          <CardHeader className="flex flex-col items-center space-y-5">
            <div className="w-full h-0 pb-[100%] relative rounded-lg">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                src={oc.imageUrl}
                alt={`OriginalContent ${oc.id.toString()}`}
                layout="fill"
                unoptimized
              />
            </div>
            <CardTitle className="text-xl">ID: {oc.id}</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              {t("imageCreatedTitle")} <RelativeTimeFormatter createdAt={oc.createdAt} />
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <DeleteOriginalContentButton
              contentId={oc.id}
              onDelete={() => {
                onDelete(oc.id)
              }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
