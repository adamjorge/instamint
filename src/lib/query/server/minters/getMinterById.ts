import prisma from "@/lib/db"

export default function getMinterById(id: number) {
  return prisma.minter.findUniqueOrThrow({ where: { id } })
}
