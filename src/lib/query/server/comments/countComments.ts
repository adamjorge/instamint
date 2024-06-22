import prisma from "@/lib/db"

export async function countComments() {
  return await prisma.comment.count()
}
