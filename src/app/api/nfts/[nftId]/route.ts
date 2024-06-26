import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import searchNft from "@/lib/query/server/nfts/searchNft"
import { StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request, { params }: { params: { nftId: string } }) {
  const { nftId } = params

  if (!nftId) {
    return Response.json({ message: "Invalid/missing NFT ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  const nft = await searchNft(nftId)

  if (!nft) {
    return Response.json({ message: "NFT not found" }, { status: StatusCodes.NOT_FOUND })
  }

  return Response.json(nft)
}
