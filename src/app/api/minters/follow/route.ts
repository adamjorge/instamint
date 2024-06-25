import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { followMinter } from "@/lib/query/server/minters/follow"
import { unfollowMinter } from "@/lib/query/server/minters/unfollow"

export const POST = withErrorHandling(handlePost)

export const DELETE = withErrorHandling(handleDelete)

async function handlePost(req: Request) {
  const { followerId, followingId } = (await req.json()) as Payload
  const followingIdNumber = parseInt(followingId, 10)
  const followResponse = await followMinter(followerId, followingIdNumber)

  return Response.json(followResponse)
}

async function handleDelete(req: Request) {
  const { followerId, followingId } = (await req.json()) as Payload
  const followingIdNumber = parseInt(followingId, 10)
  const unfollowResponse = await unfollowMinter(followerId, followingIdNumber)

  return Response.json(unfollowResponse)
}

type Payload = {
  followerId: string
  followingId: string
}
