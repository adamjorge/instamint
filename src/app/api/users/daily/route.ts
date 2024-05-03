import { deleteMinters } from "@/lib/query/minters/daily/delete"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function DELETE() {
  try {
    await deleteMinters()

    return Response.json("Cleaned up minters")
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
