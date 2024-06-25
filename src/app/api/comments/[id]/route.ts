import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { deleteComment } from "@/lib/query/server/comments/deleteComment"
import { StatusCodes } from "http-status-codes"

export const DELETE = withErrorHandling(handleDelete)

async function handleDelete(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid comment ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  await deleteComment(id)

  return Response.json({ message: `Comment ${id} deleted` })
}
