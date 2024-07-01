"use client"

import { Button } from "@/components/ui/button"
import { deleteOriginalContent } from "@/lib/query/client/minters/deleteOriginalContent"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { toast } from "sonner"

export default function DeleteOriginalContentButton({ contentId, onDelete }: DeleteButtonProps) {
  const t = useTranslations("deleteOriginalContent")
  const [isDeleting, setIsDeleting] = useState(false)
  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      await deleteOriginalContent(contentId)
      onDelete(contentId)
      toast.success(t("successDeleteMessage"))
    } catch (error) {
      toast.error(t("failedDeleteMessage"))
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Button
      onClick={handleDelete}
      disabled={isDeleting}
      className="bg-error hover:bg-red-600 text-white py-2 px-4 rounded"
    >
      {isDeleting ? t("inProcessdeleteButtonText") : t("deleteButtonText")}
    </Button>
  )
}

type DeleteButtonProps = {
  contentId: number
  onDelete: (contentId: number) => void
}
