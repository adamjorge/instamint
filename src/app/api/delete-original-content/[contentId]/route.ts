import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { deleteOriginalContentById } from "@/lib/query/server/minters/deleteOriginalContentById"
import { StatusCodes } from "http-status-codes"

export const DELETE = withErrorHandling(handleDelete)

async function handleDelete(req: Request, { params }: { params: { contentId: string } }) {
  const { contentId } = params
  await deleteOriginalContentById(parseInt(contentId, 10))

  return Response.json(
    { message: "Original content deleted successfully" },
    { status: StatusCodes.OK }
  )
}
