import prisma from "@/lib/db"

export function getMinterByUserId() {
  return prisma.user.findFirst({
    where: {
      id: "1"
    },
    include: {
      minter: true
    }
  })
}
