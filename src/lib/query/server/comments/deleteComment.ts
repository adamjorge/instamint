import prisma from "@/lib/db"

export async function deleteComment(id: string) {
  const commentId = parseInt(id, 10)

  await prisma.comment.delete({
    where: {
      id: commentId
    }
  })
}
