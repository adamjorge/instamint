import searchNft from "@/lib/query/server/nfts/searchNft"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (!id) {
    return Response.json({ message: "Invalid/missing NFT ID" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const nft = await searchNft(id)

    if (!nft) {
      return Response.json({ message: "NFT not found" }, { status: StatusCodes.NOT_FOUND })
    }

    return Response.json(nft)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
