import { notificationTypesSchema } from "@/validators/schemas/notificationTypesSchema"
import axios from "axios"

export async function fetchNotificationTypes() {
  const response = await axios.get("/api/notifications/notificationTypes")
  const types = notificationTypesSchema.parse(response.data)

  return types
}
