import prisma from "@/lib/db"
import { Minter, PrismaPromise, User } from "@prisma/client"

export async function cleanMinters() {
  const limitedDate = new Date()
  limitedDate.setMonth(limitedDate.getMonth() - 6)

  const deletionUsersPromises: Array<PrismaPromise<User>> = []
  const deletionMintersPromises: Array<PrismaPromise<Minter>> = []
  const mintersToDelete = new Set<number>()
  const usersToDelete = await prisma.user.findMany({
    where: {
      deletedAt: {
        lte: limitedDate
      }
    }
  })

  for (const user of usersToDelete) {
    deletionUsersPromises.push(
      prisma.user.delete({
        where: {
          id: user.id
        }
      })
    )
    mintersToDelete.add(user.minterId)
  }

  mintersToDelete.forEach((minterId) => {
    deletionMintersPromises.push(
      prisma.minter.delete({
        where: {
          id: minterId
        }
      })
    )
  })

  await Promise.all(deletionUsersPromises)
  await Promise.all(deletionMintersPromises)
}
