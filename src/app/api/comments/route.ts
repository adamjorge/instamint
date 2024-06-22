import { countComments } from "@/lib/query/server/comments/countComments"
import { getComments } from "@/lib/query/server/comments/getComments"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get("page")
  const pageValue = page || "1"

  try {
    const comments = await getComments(pageValue)
    const count = await countComments()
    const totalPages = Math.ceil(count / 15)

    return Response.json({ comments, totalPages })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
