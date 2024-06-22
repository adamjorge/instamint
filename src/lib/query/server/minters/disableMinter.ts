import prisma from "@/lib/db"

export default async function disableMinter(minterId: string) {
  return await prisma.user.updateMany({
    data: { isActivated: false },
    where: { minterId: parseInt(minterId, 10) }
  })
}
