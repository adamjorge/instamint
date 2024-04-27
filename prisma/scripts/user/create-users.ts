import { PrismaClient } from "@prisma/client"
import rawData from "./data.json"

export function createUsers(prisma: PrismaClient) {
  return prisma.user.createMany({ data: rawData })
}
