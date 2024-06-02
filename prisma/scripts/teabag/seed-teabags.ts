import { PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export function seedTeaBags(prisma: PrismaClient) {
  return prisma.teaBag.createMany({ data: rawData })
}
