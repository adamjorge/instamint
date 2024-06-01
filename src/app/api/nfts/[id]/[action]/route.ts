import { auth } from "@/lib/auth"
import handleNftLikeAction from "@/lib/handlers/nfts/handleNftLikeAction"
import { NftLikeActionType } from "@/validators/types/nftLikeActionType"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function PATCH(
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

  try {
    const isLiked = await handleNftLikeAction(
      parseInt(id, 10),
      parseInt(session.user.id, 10),
      action
    )

    return Response.json(isLiked)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.BAD_REQUEST }
    )
  }
}
