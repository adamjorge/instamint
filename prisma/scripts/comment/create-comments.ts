import { PrismaClient } from "@prisma/client"
import rawData from "./data.json"

export function createComments(prisma: PrismaClient) {
  const data: Comment[] = rawData.map((comment: Comment) => ({
    id: comment.id,
    content: comment.content,
    minterId: comment.minterId,
    nftId: comment.nftId,
    parentId: comment.parentId,
    createdAt: getRandomDate(new Date(2022, 0, 1), new Date())
  }))

  return prisma.comment.createMany({ data })
}

function getRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

interface Comment {
  id: number
  content: string
  minterId: number
  nftId: number
  parentId: number | null
}
