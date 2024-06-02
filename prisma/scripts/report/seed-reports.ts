import { PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export function seedReports(prisma: PrismaClient) {
  return prisma.report.createMany({ data: rawData })
}
