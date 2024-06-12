import { PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export function seedMinters(prisma: PrismaClient) {
  return prisma.minter.createMany({ data: rawData })
}
