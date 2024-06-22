import { notificationPreferenceChangeSchema } from "@/validators/schemas/notificationPreferencesSchema"
import axios from "axios"

export async function changePreferenceAction(minterId: number, type: string) {
  const response = await axios.put(`/api/notifications/preferences/${minterId.toString()}`, {
    type
  })
  const changeResponse = notificationPreferenceChangeSchema.parse(response.data)

  return changeResponse
}
