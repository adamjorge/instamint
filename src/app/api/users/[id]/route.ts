import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { deleteUser } from "@/lib/query/server/users/deleteUser"
import { StatusCodes } from "http-status-codes"

export const DELETE = withErrorHandling(handleDelete)

async function handleDelete(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid user ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  await deleteUser(id)

  return Response.json({ message: `User ${id} in delete process` })
}
