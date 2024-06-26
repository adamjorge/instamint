import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import createNftComment from "@/lib/query/server/nfts/createNftComment"
import moderation from "@/lib/utils/moderation/moderate"
import {
  CreateNftCommentType,
  createNftCommentSchema
} from "@/validators/schemas/nfts/comments/create/createCommentSchema"
import { StatusCodes } from "http-status-codes"

export const POST = withErrorHandling(handlePost)

async function handlePost(
  req: Request,
  { params }: { params: { nftId: string; minterId: string } }
) {
  const { nftId, minterId } = params

  if (!nftId) {
    return Response.json({ message: "Invalid/missing NFT ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  if (!minterId) {
    return Response.json(
      { message: "Invalid/missing minter ID" },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  const json = (await req.json()) as CreateNftCommentType
  const data = createNftCommentSchema.parse(json)

  if (data.content.length > 300) {
    return Response.json({ message: "Comment is too long" }, { status: StatusCodes.BAD_REQUEST })
  }

  data.content = moderation.clean(data.content)
  const comment = await createNftComment(parseInt(minterId, 10), data)

  return Response.json(comment)
}
