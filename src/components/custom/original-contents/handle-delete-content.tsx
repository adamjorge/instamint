"use client"

import { deleteOriginalContent } from "@/lib/query/minters/original-contents/delete-original-content/deleteOriginalContent"
import { useState } from "react"
import { toast } from "sonner"

interface DeleteButtonProps {
  contentId: number
  onDelete: (contentId: number) => void
}

export default function DeleteOriginalContentButton({ contentId, onDelete }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const handleDelete = async () => {
    setIsDeleting(true)

    try {
      await deleteOriginalContent(contentId)
      onDelete(contentId)
      toast.success("Original content deleted successfully.")
    } catch (error) {
      toast.error("Failed to delete original content.")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  )
}
