import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import toggleSearchability from "@/lib/query/server/minters/toggleSearchability"
import { StatusCodes } from "http-status-codes"

export const PATCH = withErrorHandling(handlePatch)

async function handlePatch(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid/missing ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  const { isSearchableByEmail } = await toggleSearchability(parseInt(id, 10))

  return Response.json(isSearchableByEmail)
}
