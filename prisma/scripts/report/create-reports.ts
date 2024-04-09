import { PrismaClient } from "@prisma/client"
import rawData from "./data.json"

export function createReports(prisma: PrismaClient) {
  const data = rawData.map((report) => ({
    content: report.content,
    commentId: report.commentId,
    minterId: report.minterId,
    teaBagId: report.teaBagId
  }))

  return prisma.report.createMany({ data })
}
