import toggleSearchability from "@/lib/query/minters/toggleSearchability"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid/missing ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const { isSearchableByEmail } = await toggleSearchability(Number(id))

    return Response.json(isSearchableByEmail)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
