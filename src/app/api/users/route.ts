import { deleteUser } from "@/lib/query/users/deleteUser"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function DELETE({ params }: { params: { userId: string } }) {
  try {
    const deletedUser = await deleteUser(params.userId)

    return Response.json(deletedUser)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
