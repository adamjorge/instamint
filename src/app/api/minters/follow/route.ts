import { followMinter } from "@/lib/query/minters/follow"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function POST(req: Request) {
  const data = (await req.json()) as Payload
  const { followerId, followingId } = data

  try {
    const followResponse = await followMinter(followerId, followingId)

    return Response.json({ followResponse })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

type Payload = {
  followerId: number
  followingId: number
}
