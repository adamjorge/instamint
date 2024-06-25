import { auth } from "@/lib/auth"
import handleNftLikeAction from "@/lib/handlers/handleNftLikeAction"
import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { NftLikeActionType } from "@/validators/types/nftLikeActionType"
import { StatusCodes } from "http-status-codes"

export const POST = withErrorHandling(handlePost)

async function handlePost(
  req: Request,
  { params }: { params: { id: string; action: NftLikeActionType } }
) {
  const { id, action } = params
  const session = await auth()

  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: StatusCodes.UNAUTHORIZED })
  }

  if (!id) {
    return Response.json({ message: "Invalid/missing ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  const validActions = ["like", "dislike"]

  if (!validActions.includes(action)) {
    return Response.json({ message: "Invalid action" }, { status: StatusCodes.BAD_REQUEST })
  }

  const isLiked = await handleNftLikeAction(parseInt(id, 10), parseInt(session.user.id, 10), action)

  return Response.json(isLiked)
}
