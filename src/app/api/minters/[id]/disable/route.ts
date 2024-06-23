import disableMinter from "@/lib/query/server/minters/disableMinter"
import { StatusCodes } from "http-status-codes"

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  await disableMinter(id)

  return new Response(null, { status: StatusCodes.NO_CONTENT })
}
