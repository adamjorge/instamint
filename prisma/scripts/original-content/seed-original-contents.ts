import { PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export async function seedOriginalContents(prisma: PrismaClient) {
  const firstMinter = await prisma.minter.findFirstOrThrow()
  const originalContentData = rawData.map((originalContent) => ({
    minterId: firstMinter.id,
    imageUrl: originalContent
  }))

  return await prisma.originalContent.createMany({ data: originalContentData })
}
