import { nftsFeed } from "@/lib/query/server/nfts/nftsFeed"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cursor = searchParams.get("cursor")

  if (!cursor) {
    return Response.json({ message: "Invalid/missing cursor" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const nfts = await nftsFeed(parseInt(cursor, 10))

    return Response.json(nfts)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
