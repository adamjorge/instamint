import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { countComments } from "@/lib/query/server/comments/countComments"
import { getComments } from "@/lib/query/server/comments/getComments"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get("page")
  const pageValue = page || "1"
  const comments = await getComments(pageValue)
  const count = await countComments()
  const totalPages = Math.ceil(count / 15)

  return Response.json({ comments, totalPages })
}
