import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

import hashtags from "../hashtag/data.json"

const availableLocations = [
  null,
  "Paris, France",
  "Bern, Switzerland",
  "New York, United States",
  "Vancouver, Canada",
  "Geneva, Switzerland",
  "Toronto, Canada",
  "London, United Kingdom",
  "Munich, Germany",
  "Berlin, Germany",
  "Sydney, Australia",
  "Rome, Italy"
]

export async function seedNfts(prisma: PrismaClient) {
  const originalContents = await prisma.originalContent.findMany()
  const rawData = originalContents.map((originalContent) => ({
    originalContentId: originalContent.id,
    imageUrl: originalContent.imageUrl
  }))
  const data = rawData.map((nft) => ({
    originalContentId: nft.originalContentId,
    imageUrl: nft.imageUrl,
    location: faker.helpers.arrayElement(availableLocations),
    price: faker.number.float({ min: 0, max: 100, fractionDigits: 2 }),
    description: faker.lorem.paragraph(),
    isDraft: false,
    hashtags: {
      connect: faker.helpers.arrayElements(hashtags, { min: 0, max: 4 })
    }
  }))
  const promises = data.map((nft) => prisma.nft.create({ data: nft }))

  return await Promise.all(promises)
}
