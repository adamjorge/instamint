import prisma from "@/lib/db"

export async function getComments() {
  return await prisma.comment.findMany()
}