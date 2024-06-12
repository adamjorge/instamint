import { NotificationTypeEnum, PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export async function seedNotificationPreferences(prisma: PrismaClient) {
  const notificationPreferenceData = rawData.map((notificationPreference) => ({
    minterId: notificationPreference.minterId,
    type: notificationPreference.type as NotificationTypeEnum,
    isEnabled: notificationPreference.isEnabled
  }))

  return await prisma.notificationPreference.createMany({ data: notificationPreferenceData })
}
