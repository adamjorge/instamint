import getMinterById from "@/lib/query/minters/getMinterById"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const minter = await getMinterById(Number(id))

  return Response.json(minter)
}
