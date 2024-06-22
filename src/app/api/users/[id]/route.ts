import { deleteUser } from "@/lib/query/server/users/deleteUser"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid user ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    await deleteUser(id)

    return Response.json({ message: `User ${id} in delete process` })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
