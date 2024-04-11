import { getReports } from "@/lib/query/reports/getReports"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
  const type = req.nextUrl.pathname.split("/").pop()

  if (type !== "minters" && type !== "comments" && type !== "teabags") {
    return NextResponse.json({ error: "Invalid Data Type" }, { status: 400 })
  }

  try {
    const reports = await getReports(type)

    return NextResponse.json(reports, res)
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
