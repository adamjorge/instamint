import { searchNfts } from "@/lib/query/nfts/search"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get("search")

  if (!search) {
    return Response.json(
      { message: "Missing search parameter" },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  try {
    const nfts = await searchNfts(search)

    return Response.json(nfts)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
