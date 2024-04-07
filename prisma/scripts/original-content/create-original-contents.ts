import { PrismaClient } from "@prisma/client"
import rawData from "./data.json"

export async function createOriginalContents(prisma: PrismaClient) {
  const firstMinter = await prisma.minter.findFirstOrThrow({ where: { isAdmin: false } })

  const data = rawData.map((originalContent) => ({
    minterId: firstMinter.id,
    imageUrl: originalContent
  }))

  return prisma.originalContent.createMany({ data })
}
