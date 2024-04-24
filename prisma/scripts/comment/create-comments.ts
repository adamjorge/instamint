import { PrismaClient } from "@prisma/client"
import rawData from "./data.json"

export function createComments(prisma: PrismaClient) {
  const data = rawData.map((comment) => ({
    content: comment.content,
    minterId: comment.minterId,
    nftId: comment.nftId,
    createdAt: getRandomDate(new Date(2022, 0, 1), new Date())
  }))

  return prisma.comment.createMany({ data })
}

function getRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
