import prisma from "@/lib/db"
import { Minter, PrismaPromise, User } from "@prisma/client"

export async function deleteMinters() {
  const deletionPromises: Array<PrismaPromise<User | Minter>> = []
  const mintersToDelete: Array<number> = []
  const usersToDelete = await prisma.user.findMany({
    where: {
      deletedAt: {
        not: null
      }
    }
  })

  usersToDelete.forEach((user) => {
    const deletionUserPromise = prisma.user.delete({
      where: {
        id: user.id
      }
    })

    mintersToDelete.push(user.minterId)
    deletionPromises.push(deletionUserPromise)
  })
  mintersToDelete.forEach((minterId) => {
    const deletionMinterPromise = prisma.minter.delete({
      where: {
        id: minterId
      }
    })

    deletionPromises.push(deletionMinterPromise)
  })

  return await Promise.all(deletionPromises)
}
