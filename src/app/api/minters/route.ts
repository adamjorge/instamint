import getMinters, { getMintersTotalPages } from "@/lib/query/server/minters/getMinters"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get("page")
  const pageValue = page || "1"

  try {
    const minters = await getMinters(pageValue)
    const totalPages = await getMintersTotalPages()

    return Response.json({ minters, totalPages })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
