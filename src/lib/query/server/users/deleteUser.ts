import prisma from "@/lib/db"

export async function deleteUser(userId: string) {
  const todayDate = new Date()

  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      deletedAt: todayDate
    }
  })
}
