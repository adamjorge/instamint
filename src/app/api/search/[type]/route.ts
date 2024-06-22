import { searchByType } from "@/lib/query/server/search/searchByType"
import { checkSearchParams } from "@/lib/utils/checkSearchParams"
import { SearchType } from "@/validators/types/searchType"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { type: SearchType } }) {
  const { type } = params
  const { searchParams } = new URL(req.url)
  const search = searchParams.get("search")
  const userId = searchParams.get("currentUserId")
  const minPrice = searchParams.get("min") || ""
  const maxPrice = searchParams.get("max") || ""
  const checkProps = { type, search, userId }
  const checkResponse = checkSearchParams({ ...checkProps })

  if (checkResponse.status !== StatusCodes.OK) {
    return Response.json({ message: checkResponse.errorMessage }, { status: checkResponse.status })
  }

  const searchTerm = search as string
  const currentUserId = userId as string

  try {
    const results = await searchByType({
      type,
      searchTerm,
      minPrice,
      maxPrice,
      currentUserId
    })

    return Response.json(results)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
