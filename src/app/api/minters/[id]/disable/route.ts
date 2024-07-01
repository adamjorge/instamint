import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import disableMinter from "@/lib/query/server/minters/disableMinter"
import { StatusCodes } from "http-status-codes"

export const PATCH = withErrorHandling(handlePatch)

async function handlePatch(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  await disableMinter(id)

  return new Response(null, { status: StatusCodes.NO_CONTENT })
}
