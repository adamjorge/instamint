import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { cleanMinters } from "@/lib/query/server/minters/clean"

export const DELETE = withErrorHandling(handleDelete)

async function handleDelete() {
  await cleanMinters()

  return Response.json("Cleaned up minters")
}
