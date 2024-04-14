import prisma from "@/lib/db"

export const deleteComment = (id: number) =>
  prisma.comment.delete({
    where: {
      id
    }
  })
