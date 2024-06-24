import { PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export function seedComments(prisma: PrismaClient) {
  const data: Comment[] = rawData.map((comment: Comment) => ({
    id: comment.id,
    content: comment.content,
    authorId: comment.authorId,
    nftId: comment.nftId,
    parentId: comment.parentId,
    createdAt: getRandomDate(new Date(2022, 0, 1), new Date())
  }))

  return prisma.comment.createMany({ data })
}

function getRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

type Comment = {
  id: number
  content: string
  authorId: number
  nftId: number
  parentId: number | null
}
