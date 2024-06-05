import { notificationPreferencesSchema } from "@/validators/schemas/notificationPreferencesSchema"
import axios from "axios"

export async function fetchMinterPreferences(minterId: number) {
  const response = await axios.get(`/api/notifications/preferences/${minterId.toString()}`)
  const preferences = notificationPreferencesSchema.parse(response.data)

  return preferences
}
