import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { searchByType } from "@/lib/query/server/search/searchByType"
import { checkSearchParams } from "@/lib/utils/checkSearchParams"
import { SearchType } from "@/validators/types/searchType"
import { StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request, { params }: { params: { type: SearchType } }) {
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
  const results = await searchByType({
    type,
    searchTerm,
    minPrice,
    maxPrice,
    currentUserId
  })

  return Response.json(results)
}
