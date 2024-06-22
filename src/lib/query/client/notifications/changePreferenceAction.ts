import axiosClient from "@/lib/client"
import { notificationPreferenceChangeSchema } from "@/validators/schemas/notificationPreferencesSchema"

export async function changePreferenceAction(minterId: number, type: string) {
  const response = await axiosClient.put(`/notifications/preferences/${minterId.toString()}`, {
    type
  })
  const changeResponse = notificationPreferenceChangeSchema.parse(response.data)

  return changeResponse
}
