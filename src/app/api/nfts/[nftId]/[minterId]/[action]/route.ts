import handleNftLikeAction from "@/lib/handlers/handleNftLikeAction"
import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { NftLikeActionType } from "@/validators/types/nftLikeActionType"
import { StatusCodes } from "http-status-codes"

export const POST = withErrorHandling(handlePost)

async function handlePost(
  req: Request,
  { params }: { params: { nftId: string; minterId: string; action: NftLikeActionType } }
) {
  const { nftId, minterId, action } = params

  if (!nftId) {
    return Response.json({ message: "Invalid/missing ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  if (!minterId) {
    return Response.json(
      { message: "Invalid/missing minter ID" },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  const validActions = ["like", "dislike"]

  if (!validActions.includes(action)) {
    return Response.json({ message: "Invalid action" }, { status: StatusCodes.BAD_REQUEST })
  }

  const isLiked = await handleNftLikeAction(parseInt(nftId, 10), parseInt(minterId, 10), action)

  return Response.json(isLiked)
}
