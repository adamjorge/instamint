import { PrismaClient } from "@prisma/client"
import rawData from "./data.json"

export function createTeaBags(prisma: PrismaClient) {
  return prisma.teaBag.createMany({ data: rawData })
}
