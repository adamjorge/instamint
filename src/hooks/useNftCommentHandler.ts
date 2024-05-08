import postNftComment from "@/lib/query/nfts/postNftComment"
import { CreateNftCommentType } from "@/validators/schemas/nfts/comments/create/createCommentSchema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, useState } from "react"
import { toast } from "sonner"

export default function useNftCommentHandler(nftId: number, parentId: number) {
  const queryClient = useQueryClient()
  const [reply, setReply] = useState("")
  const [isReplying, setIsReplying] = useState(false)
  const toggleReply = () => {
    setIsReplying(!isReplying)
  }
  const handleReplyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value)
  }
  const createNftCommentMutation = useMutation({
    mutationFn: postNftComment
  })
  const submitComment = async () => {
    if (reply.trim()) {
      const content = reply.trim()
      const commentData: CreateNftCommentType = {
        content,
        nftId,
        parentId
      }
      await createNftCommentMutation.mutateAsync(commentData, {
        onSuccess: () => {
          queryClient
            .invalidateQueries({ queryKey: ["nfts-comments", nftId] })
            .then(() => {
              setReply("")
              setIsReplying(false)
              toast.success("Comment created successfully")
            })
            .catch(() => {
              toast.error("Something went wrong")
            })
        }
      })
    }
  }

  return {
    reply,
    isReplying,
    toggleReply,
    handleReplyChange,
    submitComment
  }
}
