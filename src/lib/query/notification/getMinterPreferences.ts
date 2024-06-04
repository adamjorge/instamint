import prisma from "@/lib/db"

export async function getMinterPreferences(minterId: string) {
  const minterIdNumber = parseInt(minterId, 10)

  return await prisma.notificationPreference.findMany({
    where: {
      minterId: minterIdNumber
    }
  })
}
