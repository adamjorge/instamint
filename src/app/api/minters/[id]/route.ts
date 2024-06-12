import deleteMinter from "@/lib/query/minters/deleteMinter"
import getMinterById from "@/lib/query/minters/getMinterById"
import { StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const minter = await getMinterById(Number(id))

  return Response.json(minter)
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  await deleteMinter(id)

  return new Response(null, { status: StatusCodes.NO_CONTENT })
}
