import prisma from "@/lib/db"

export async function getNotificationsByMinterId(minterId: string) {
  const minterIdNumber = parseInt(minterId, 10)

  return await prisma.notification.findMany({
    where: {
      minterId: minterIdNumber
    }
  })
}
