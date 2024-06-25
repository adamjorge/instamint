import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { getDataByBlockchain } from "@/lib/query/server/crypto/getDataByBlockchain"
import { StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request) {
  const { searchParams } = new URL(req.url)
  const blockchain = searchParams.get("symbol")

  if (!blockchain) {
    return Response.json(
      { message: "Blockchain symbol search parameter is required" },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  const blockchainData = await getDataByBlockchain(blockchain)

  return Response.json(blockchainData)
}
