import { deleteComment } from "@/lib/query/comments/deleteComment"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid comment ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    await deleteComment(parseInt(id, 10))

    return Response.json({ message: `Comment ${id} deleted` }, { status: StatusCodes.OK })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
