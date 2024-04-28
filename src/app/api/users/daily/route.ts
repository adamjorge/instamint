import { deleteMinters } from "@/lib/query/minters/daily/delete"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function DELETE() {
  try {
    const deletedMinters = await deleteMinters()

    return Response.json(deletedMinters)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
