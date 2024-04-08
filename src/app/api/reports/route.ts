import prisma from "@/lib/db"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"

export default async function handler(req: NextApiRequest, res: NextResponse) {
  if (req.method === "GET") {
    const reports = await prisma.minter.findMany()

    return NextResponse.json(reports, res)
  }

  return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
}
