import prisma from "@/lib/db"

export async function cleanMinters() {
  const limitedDate = new Date()
  limitedDate.setMonth(limitedDate.getMonth() - 6)

  const mintersToDelete = new Set<number>()
  const usersToDelete = await prisma.user.findMany({
    where: {
      deletedAt: {
        lte: limitedDate
      }
    }
  })
  const deletionUsersPromises = usersToDelete.map((user) => {
    mintersToDelete.add(user.minterId)

    return prisma.user.delete({
      where: {
        id: user.id
      }
    })
  })
  const deletionMintersPromises = Array.from(mintersToDelete).map((minterId) =>
    prisma.minter.delete({
      where: {
        id: minterId
      }
    })
  )

  await Promise.all(deletionUsersPromises)
  await Promise.all(deletionMintersPromises)
}
