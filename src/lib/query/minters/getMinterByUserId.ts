import prisma from "@/lib/db"

export function getMinterByUserId(userId: string) {
  return prisma.user.findFirst({
    where: {
      id: userId
    },
    include: {
      minter: true
    }
  })
}
