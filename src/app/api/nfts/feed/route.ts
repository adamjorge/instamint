import { nftsFeed } from "@/lib/query/nfts/nftsFeed"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET() {
  try {
    const nfts = await nftsFeed()

    return Response.json(nfts)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
