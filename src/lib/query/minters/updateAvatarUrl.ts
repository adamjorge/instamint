import prisma from "@/lib/db"

export async function updateAvatarUrl(minterId: string, avatarUrl: string) {
  const minterIdNumber = parseInt(minterId, 10)

  return await prisma.minter.update({
    where: {
      id: minterIdNumber
    },
    data: {
      avatarUrl
    }
  })
}
