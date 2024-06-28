import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import searchNftComments from "@/lib/query/server/nfts/searchNftComments"
import { StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request, { params }: { params: { nftId: string } }) {
  const { nftId } = params

  if (!nftId) {
    return Response.json({ message: "Invalid/missing NFT ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  const comments = await searchNftComments(nftId)

  return Response.json(comments)
}
