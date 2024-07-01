import axiosClient from "@/lib/client"
import { notificationTypesSchema } from "@/validators/schemas/notificationTypesSchema"

export async function fetchNotificationTypes() {
  const response = await axiosClient.get("/notifications/constants")

  return notificationTypesSchema.parse(response.data)
}
