import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import deleteMinter from "@/lib/query/server/minters/deleteMinter"
import getMinterById from "@/lib/query/server/minters/getMinterById"
import isAdmin from "@/lib/utils/auth/isAdmin"
import isAuthenticated from "@/lib/utils/auth/isAuthenticated"
import isCurrentUser from "@/lib/utils/auth/isCurrentUser"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

export const DELETE = withErrorHandling(handleDelete)

async function handleGet(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const minter = await getMinterById(parseInt(id, 10))

  return Response.json(minter)
}

async function handleDelete(req: Request, { params }: { params: { id: string } }) {
  const session = await isAuthenticated()

  if (!session) {
    return Response.json(
      { message: ReasonPhrases.UNAUTHORIZED },
      { status: StatusCodes.UNAUTHORIZED }
    )
  }

  const { id } = params

  if (!isCurrentUser(id, session) && !isAdmin(session)) {
    return Response.json({ message: ReasonPhrases.FORBIDDEN }, { status: StatusCodes.FORBIDDEN })
  }

  await deleteMinter(id)

  return new Response(null, { status: StatusCodes.NO_CONTENT })
}
