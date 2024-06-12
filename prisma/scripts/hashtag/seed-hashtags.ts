import { PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export function seedHashtags(prisma: PrismaClient) {
  const data: Hashtag[] = rawData.map((hashtag: Hashtag) => ({
    id: hashtag.id,
    name: hashtag.name
  }))

  return prisma.hashtag.createMany({ data })
}

interface Hashtag {
  id: number
  name: string
}
