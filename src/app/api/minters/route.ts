import { ReasonPhrases, StatusCodes } from "http-status-codes"
import { searchMinters } from "@/lib/query/minters/search"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get("search")

  if (!search) {
    return Response.json(
      { message: "Missing search parameter" },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  try {
    const minters = await searchMinters(search)

    return Response.json(minters)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
