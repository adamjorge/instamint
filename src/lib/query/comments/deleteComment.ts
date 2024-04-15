import prisma from "@/lib/db"

export async function deleteComment(id: number) {
  await prisma.comment.delete({
    where: {
      id
    }
  })
}
