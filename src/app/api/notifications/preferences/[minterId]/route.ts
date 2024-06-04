import { getMinterPreferences } from "@/lib/query/notification/getMinterPreferences"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { minterId: string } }) {
  try {
    const { minterId } = params
    const minterPreferences = await getMinterPreferences(minterId)

    return Response.json(minterPreferences)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
