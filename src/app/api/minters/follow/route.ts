import { followMinter } from "@/lib/query/server/minters/follow"
import { unfollowMinter } from "@/lib/query/server/minters/unfollow"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function POST(req: Request) {
  const { followerId, followingId } = (await req.json()) as Payload
  const followingIdNumber = parseInt(followingId, 10)

  try {
    const followResponse = await followMinter(followerId, followingIdNumber)

    return Response.json(followResponse)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

export async function DELETE(req: Request) {
  const { followerId, followingId } = (await req.json()) as Payload
  const followingIdNumber = parseInt(followingId, 10)

  try {
    const unfollowResponse = await unfollowMinter(followerId, followingIdNumber)

    return Response.json(unfollowResponse)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

type Payload = {
  followerId: string
  followingId: string
}
