import { PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export function createComments(prisma: PrismaClient) {
  return prisma.comment.createMany({ data: rawData })
}
