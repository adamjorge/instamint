import prisma from "@/lib/db"

export async function getComments(page: string) {
  const skip = parseInt(page, 10) === 1 ? 0 : (parseInt(page, 10) - 1) * 15

  return await prisma.comment.findMany({ skip, take: 15 })
}
