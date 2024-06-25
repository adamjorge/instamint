import Actions from "@/components/custom/comments/actions"
import { handleDeleteComment } from "@/lib/query/client/comments/handleDeleteComment"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Row } from "@tanstack/react-table"
import { useCallback } from "react"
import { toast } from "sonner"

export function CommentActions({
  row
}: {
  row: Row<{
    id: number
    content: string
    createdAt: string
    updatedAt: string | null
    nftId: number
    authorId: number | null
  }>
}) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (commentId: string) => handleDeleteComment(commentId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["comments"] })
      toast.info("Comment deleted successfully")
    }
  })
  const handleClickOnDelete = useCallback(
    (commentId: string) => {
      mutation.mutate(commentId)
    },
    [mutation]
  )
  const handleClickOnWIP = useCallback(() => {
    toast.error("This feature is a work in progress")
  }, [])

  return (
    <Actions
      row={row}
      handleClickOnDelete={handleClickOnDelete}
      handleClickOnWIP={handleClickOnWIP}
    />
  )
}
