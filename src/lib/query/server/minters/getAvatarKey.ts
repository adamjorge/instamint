import prisma from "@/lib/db"

export async function getAvatarKey(minterId: string) {
  const minterIdNumber = parseInt(minterId, 10)
  const minter = await prisma.minter.findUnique({
    where: {
      id: minterIdNumber
    }
  })

  return minter?.avatarKey
}
