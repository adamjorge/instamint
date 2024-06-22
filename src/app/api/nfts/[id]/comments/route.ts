import { auth } from "@/lib/auth"
import createNftComment from "@/lib/query/server/nfts/createNftComment"
import searchNftComments from "@/lib/query/server/nfts/searchNftComments"
import moderation from "@/lib/utils/moderation/moderate"
import {
  CreateNftCommentType,
  createNftCommentSchema
} from "@/validators/schemas/nfts/comments/create/createCommentSchema"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid/missing NFT ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const comments = await searchNftComments(id)

    return Response.json(comments)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid/missing NFT ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  const session = await auth()
  const authorId = session?.user.id

  if (!authorId) {
    return Response.json({ message: "Unauthorized" }, { status: StatusCodes.UNAUTHORIZED })
  }

  try {
    const json = (await req.json()) as CreateNftCommentType
    const data = createNftCommentSchema.parse(json)

    if (data.content.length > 300) {
      return Response.json({ message: "Comment is too long" }, { status: StatusCodes.BAD_REQUEST })
    }

    data.content = moderation.clean(data.content)
    const comment = await createNftComment(parseInt(authorId, 10), data)

    return Response.json(comment)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
