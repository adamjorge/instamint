import searchNftComments from "@/lib/query/nfts/searchNftComments"
import { isValidRequest } from "@/lib/query/nfts/validate-request"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!isValidRequest(id)) {
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
