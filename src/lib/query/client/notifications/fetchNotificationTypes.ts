import axiosClient from "@/lib/client"
import { notificationTypesSchema } from "@/validators/schemas/notificationTypesSchema"

export async function fetchNotificationTypes() {
  const response = await axiosClient.get("/notifications/constants")
  const types = notificationTypesSchema.parse(response.data)

  return types
}
