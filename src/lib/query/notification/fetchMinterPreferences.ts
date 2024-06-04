import { notificationPreferencesSchema } from "@/validators/schemas/notificationPreferencesSchema"
import axios from "axios"

export async function fetchMinterPreferences(minterId: string) {
  const response = await axios.get(`/api/notifications/preferences/${minterId}`)
  const preferences = notificationPreferencesSchema.parse(response.data)

  return preferences
}
