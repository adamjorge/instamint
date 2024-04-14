import { getComments } from "@/lib/query/comments/getComments"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET() {
  try {
    const comments = await getComments()

    return Response.json(comments)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
