import { deleteOriginalContentById } from "@/lib/query/minters/original-contents/delete-original-content/deleteOriginalContentById"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function DELETE(req: Request, { params }: { params: { contentId: string } }) {
  try {
    const { contentId } = params
    await deleteOriginalContentById(parseInt(contentId, 10))

    return Response.json(
      { message: "Original content deleted successfully" },
      { status: StatusCodes.OK }
    )
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
