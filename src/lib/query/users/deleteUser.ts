import prisma from "@/lib/db"

export const deleteUser = async (userId: string) =>
  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      deletedAt: new Date()
    }
  })
