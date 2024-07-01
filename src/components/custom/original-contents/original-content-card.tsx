import DeleteOriginalContentButton from "@/components/custom/original-contents/handle-delete-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import useRelativeTime from "@/hooks/useRelativeTime"
import { OriginalContentCardProps } from "@/validators/types/originalContent"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function OriginalContentCard({ content, onDelete }: OriginalContentCardProps) {
  const t = useTranslations("deleteOriginalContent")
  const relativeTime = useRelativeTime(content.createdAt)

  return (
    <Card className="bg-muted ml-2 mr-2 md:mr-2 xl:mr-3">
      <CardHeader className="flex flex-col items-center space-y-5">
        <div className="w-full h-0 pb-[100%] relative rounded-lg">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            src={content.imageUrl}
            alt={`OriginalContent ${content.id.toString()}`}
            layout="fill"
            unoptimized
          />
        </div>
        <CardTitle className="text-xl">ID: {content.id}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {t("imageCreatedTitle")} {relativeTime}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <DeleteOriginalContentButton
          contentId={content.id}
          onDelete={() => {
            onDelete(content.id)
          }}
        />
      </CardContent>
    </Card>
  )
}
