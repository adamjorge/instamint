import axiosClient from "@/lib/client"
import { notificationPreferencesSchema } from "@/validators/schemas/notificationPreferencesSchema"

export async function fetchMinterPreferences(minterId: number) {
  const response = await axiosClient.get(`/notifications/preferences/${minterId.toString()}`)
  const preferences = notificationPreferencesSchema.parse(response.data)

  return preferences
}
