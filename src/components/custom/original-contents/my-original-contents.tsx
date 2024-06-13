"use client"

import EmptyStateMessage from "@/components/custom/original-contents/empty-state-message"
import OriginalContentGrid from "@/components/custom/original-contents/original-content-grid"
import Spinner from "@/components/custom/spinner"
import fetchOriginalContent from "@/lib/query/minters/original-contents/getAllOriginalContents"
import { OriginalContentSchemaType } from "@/validators/schemas/original-contents/fetchOriginalContents"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface OriginalContentsProps {
  minterId: number
}

export default function OriginalContents({ minterId }: OriginalContentsProps) {
  const t = useTranslations("deleteOriginalContent")
  const [contents, setContents] = useState<OriginalContentSchemaType[]>([])
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsPending(true)
        const data = await fetchOriginalContent(minterId)
        setContents(data)
      } catch (error) {
        toast.error(t("errorFetchOc"))
      } finally {
        setIsPending(false)
      }
    }

    void fetchData()
  }, [minterId, t])

  const handleContentDelete = (contentId: number) => {
    setContents((prevContents) => prevContents.filter((oc) => oc.id !== contentId))
  }
  let content = null

  if (isPending) {
    content = (
      <div className="flex justify-center items-center h-10">
        <Spinner />
      </div>
    )
  } else if (contents.length === 0) {
    content = <EmptyStateMessage />
  } else {
    content = <OriginalContentGrid contents={contents} onDelete={handleContentDelete} />
  }

  return (
    <div className="m-1">
      <div className="my-5">
        <h3 className="text-center text-4xl mt-3 font-bold">{t("Title")}</h3>
      </div>
      {content}
    </div>
  )
}
