import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import getMinters, { getMintersTotalPages } from "@/lib/query/server/minters/getMinters"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get("page")
  const pageValue = page || "1"
  const minters = await getMinters(pageValue)
  const totalPages = await getMintersTotalPages()

  return Response.json({ minters, totalPages })
}
