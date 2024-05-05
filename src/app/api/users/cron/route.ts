import { cleanMinters } from "@/lib/query/minters/clean"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function DELETE() {
  try {
    await cleanMinters()

    return Response.json("Cleaned up minters")
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
