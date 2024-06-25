import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { getNotificationTypes } from "@/lib/query/server/notifications/getNotificationTypes"

export const GET = withErrorHandling(handleGet)

async function handleGet() {
  const notificationsTypes = await getNotificationTypes()

  return Response.json(notificationsTypes)
}
