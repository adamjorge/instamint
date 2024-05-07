import { PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export function createReports(prisma: PrismaClient) {
  return prisma.report.createMany({ data: rawData })
}
