import { getNotificationTypes } from "@/lib/query/notification/getNotificationTypes"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET() {
  try {
    const notificationsTypes = await getNotificationTypes()

    return Response.json(notificationsTypes)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
