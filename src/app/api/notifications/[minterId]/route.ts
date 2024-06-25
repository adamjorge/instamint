import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { getNotificationsByMinterId } from "@/lib/query/server/notifications/getNotificationsByMinterId"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request, { params }: { params: { minterId: string } }) {
  const { minterId } = params
  const notifications = await getNotificationsByMinterId(minterId)

  return Response.json(notifications)
}
