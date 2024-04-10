import prisma from "@/lib/db"
import type { Report } from "@/validators/types/report"
import { NextRequest, NextResponse } from "next/server"

async function getReports(type: Report) {
  switch (type) {
    case "minters":
      return await prisma.report.findMany({
        where: {
          minterId: {
            not: null
          }
        }
      })

    case "comments":
      return await prisma.report.findMany({
        where: {
          commentId: {
            not: null
          }
        }
      })

    case "teabags":
      return await prisma.report.findMany({
        where: {
          commentId: {
            not: null
          }
        }
      })

    default:
      throw new Error("Invalid type")
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const type = req.nextUrl.pathname.split("/").pop() as Report

  try {
    const reports = await getReports(type)

    return NextResponse.json(reports, res)
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
