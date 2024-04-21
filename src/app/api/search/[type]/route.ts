import { searchByType } from "@/lib/query/search/search"
import { SearchType } from "@/validators/types/searchType"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { type: SearchType } }) {
  const { type } = params
  const { searchParams } = new URL(req.url)
  const search = searchParams.get("search")
  const minPrice = searchParams.get("min") || ""
  const maxPrice = searchParams.get("max") || ""

  if (!["minters", "nfts", "teabags"].includes(type)) {
    return Response.json({ message: "Invalid type" }, { status: StatusCodes.BAD_REQUEST })
  }

  if (!search) {
    return Response.json(
      { message: "Missing search parameter" },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  try {
    const results = await searchByType({ type, searchTerm: search, minPrice, maxPrice })

    return Response.json(results)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
