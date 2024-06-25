import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { nftsFeed } from "@/lib/query/server/nfts/nftsFeed"
import { StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request) {
  const { searchParams } = new URL(req.url)
  const cursor = searchParams.get("cursor")

  if (!cursor) {
    return Response.json({ message: "Invalid/missing cursor" }, { status: StatusCodes.BAD_REQUEST })
  }

  const nfts = await nftsFeed(parseInt(cursor, 10))

  return Response.json(nfts)
}
