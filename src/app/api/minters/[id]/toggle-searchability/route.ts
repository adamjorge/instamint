import toggleSearchability from "@/lib/query/server/minters/toggleSearchability"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid/missing ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const { isSearchableByEmail } = await toggleSearchability(parseInt(id, 10))

    return Response.json(isSearchableByEmail)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
