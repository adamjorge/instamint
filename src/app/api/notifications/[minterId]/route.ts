import { getNotificationsByMinterId } from "@/lib/query/notification/getNotificationsByMinterId"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { minterId: string } }) {
  try {
    const { minterId } = params
    const notifications = await getNotificationsByMinterId(minterId)

    return Response.json(notifications)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
