import { findResetPasswordQuery } from "@/lib/query/users/findResetPasswordQuery"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")

  if (!token) {
    return Response.json({ message: "Missing token" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const resetQuery = await findResetPasswordQuery(token)

    if (!resetQuery) {
      return Response.json({ message: "Invalid token" }, { status: StatusCodes.NOT_FOUND })
    }

    return Response.json({ message: "Valid token" }, { status: StatusCodes.OK })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
