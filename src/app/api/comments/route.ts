import { getComments } from "@/lib/query/comments/getComments"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const comments = await getComments()

    return NextResponse.json(comments, res)
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
