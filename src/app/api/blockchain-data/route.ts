import { getDataByBlockchain } from "@/lib/query/crypto/getDataByBlockchain"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const blockchain = searchParams.get("symbol")

  if (!blockchain) {
    return Response.json(
      { message: "Blockchain symbol search parameter is required" },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  try {
    const blockchainData = await getDataByBlockchain(blockchain)

    return Response.json(blockchainData)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
