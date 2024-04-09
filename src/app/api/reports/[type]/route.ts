import prisma from "@/lib/db"
import type { Report } from "@/validators/types/reports"
import { NextRequest, NextResponse } from "next/server"

async function getReports(type: Report) {
  switch (type) {
    case "minter":
      return await prisma.minter.findMany({
        where: {
          isReported: true
        }
      })

    case "comment":
      return await prisma.comment.findMany({
        where: {
          isReported: true
        }
      })

    case "tea-bag":
      return await prisma.teaBag.findMany({
        where: {
          isReported: true
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
