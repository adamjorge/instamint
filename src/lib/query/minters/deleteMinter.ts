import prisma from "@/lib/db"

export default async function deleteMinter(minterId: string) {
  await prisma.$transaction([
    prisma.minter.delete({ where: { id: parseInt(minterId, 10) } }),
    prisma.user.deleteMany({ where: { minterId: parseInt(minterId, 10) } })
  ])
}
