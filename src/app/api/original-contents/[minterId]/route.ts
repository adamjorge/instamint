import { getOriginalContentsByMinterId } from "@/lib/query/server/minters/getOriginalContentsByMinterId"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { minterId: string } }) {
  try {
    const { minterId } = params
    const originalContents = await getOriginalContentsByMinterId(minterId)

    return Response.json(originalContents)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
