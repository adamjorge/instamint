import prisma from "@/lib/db"
import type { ReportType } from "@/validators/types/reportType"

export async function getReports(type: ReportType) {
  switch (type) {
    case "minters":
      return await getMintersReports()

    case "comments":
      return await getCommentsReports()

    case "teabags":
      return await getTeaBagReports()

    default:
      throw new Error("Invalid type")
  }
}

async function getMintersReports() {
  return await prisma.report.findMany({
    where: {
      minterId: {
        not: null
      }
    }
  })
}

async function getCommentsReports() {
  return await prisma.report.findMany({
    where: {
      commentId: {
        not: null
      }
    }
  })
}

async function getTeaBagReports() {
  return await prisma.report.findMany({
    where: {
      commentId: {
        not: null
      }
    }
  })
}
