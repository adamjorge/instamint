import { PrismaClient } from "@prisma/client"
import rawData from "./data.json"

export async function createMinters(prisma: PrismaClient) {
  return prisma.minter.createMany({ data: rawData })
}
