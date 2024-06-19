import deleteMinter from "@/lib/query/minters/deleteMinter"
import getMinterById from "@/lib/query/minters/getMinterById"
import isAdmin from "@/lib/utils/auth/isAdmin"
import isAuthenticated from "@/lib/utils/auth/isAuthenticated"
import isCurrentUser from "@/lib/utils/auth/isCurrentUser"
import { StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const minter = await getMinterById(parseInt(id, 10))

  return Response.json(minter)
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await isAuthenticated()

  if (!session) {
    return new Response(null, { status: StatusCodes.UNAUTHORIZED })
  }

  const { id } = params

  if (!isCurrentUser(id, session) && !isAdmin(session)) {
    return new Response(null, { status: StatusCodes.FORBIDDEN })
  }

  await deleteMinter(id)

  return new Response(null, { status: StatusCodes.NO_CONTENT })
}
