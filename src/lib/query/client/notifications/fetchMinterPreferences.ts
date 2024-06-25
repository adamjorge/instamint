import axiosClient from "@/lib/client"
import { notificationPreferencesSchema } from "@/validators/schemas/notificationPreferencesSchema"

export async function fetchMinterPreferences(minterId: number) {
  const response = await axiosClient.get(`/notifications/preferences/${minterId.toString()}`)

  return notificationPreferencesSchema.parse(response.data)
}
