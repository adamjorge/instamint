import prisma from "@/lib/db"
import { Minter, PrismaPromise, User } from "@prisma/client"

export async function deleteMinters() {
  const deletionPromises: Array<PrismaPromise<User | Minter>> = []
  const mintersToDelete = new Set<number>()
  const usersToDelete = await prisma.user.findMany({
    where: {
      deletedAt: {
        not: null
      }
    }
  })

  for (const user of usersToDelete) {
    deletionPromises.push(
      prisma.user.delete({
        where: {
          id: user.id
        }
      })
    )
    mintersToDelete.add(user.minterId)
  }

  mintersToDelete.forEach((minterId) => {
    deletionPromises.push(
      prisma.minter.delete({
        where: {
          id: minterId
        }
      })
    )
  })

  return await Promise.all(deletionPromises)
}
