import postNftComment from "@/lib/query/client/nfts/postNftComment"
import { CreateNftCommentType } from "@/validators/schemas/nfts/comments/create/createCommentSchema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, useCallback, useState } from "react"
import { toast } from "sonner"

export default function useNftCommentHandler(nftId: number, parentId: number | null) {
  const queryClient = useQueryClient()
  const [reply, setReply] = useState("")
  const [replyCount, setReplyCount] = useState(0)
  const [isReplying, setIsReplying] = useState(false)
  const toggleReply = useCallback(() => {
    setIsReplying(!isReplying)
  }, [isReplying])
  const handleReplyChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value)
    setReplyCount(e.target.value.length)
  }, [])
  const createNftCommentMutation = useMutation({
    mutationFn: postNftComment,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["nfts-comments", nftId] })
      setReply("")
      setReplyCount(0)
      setIsReplying(false)
      toast.success("Comment created successfully")
    },
    onError: () => {
      toast.error("Something went wrong")
    }
  })
  const submitComment = useCallback(() => {
    const commentData: CreateNftCommentType = {
      content: reply.trim(),
      nftId,
      parentId
    }
    createNftCommentMutation.mutate(commentData)
  }, [createNftCommentMutation, nftId, parentId, reply])

  return {
    reply,
    replyCount,
    isReplying,
    toggleReply,
    handleReplyChange,
    submitComment
  }
}
