import { PrismaClient } from "@prisma/client"
import rawData from "./data.json"

export function createHashtags(prisma: PrismaClient) {
  const data = rawData.map((hashtag: string) => ({ name: hashtag }))

  return prisma.hashtag.createMany({ data })
}
