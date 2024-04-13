import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

export async function createNfts(prisma: PrismaClient) {
  const originalContents = await prisma.originalContent.findMany()
  const rawData = originalContents.map((originalContent) => ({
    originalContentId: originalContent.id,
    imageUrl: originalContent.imageUrl
  }))
  const data = rawData.map((nft) => ({
    originalContentId: nft.originalContentId,
    imageUrl: nft.imageUrl,
    location: "",
    price: faker.number.float({ min: 0, max: 100, fractionDigits: 2 }),
    description: faker.lorem.paragraph(),
    isDraft: false
  }))

  return prisma.nft.createMany({ data })
}
