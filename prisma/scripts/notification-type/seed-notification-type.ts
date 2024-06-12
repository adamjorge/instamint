import { NotificationTypeEnum, PrismaClient } from "@prisma/client"

import rawData from "./data.json"

export async function seedNotificationTypes(prisma: PrismaClient) {
  const notificationTypeData = rawData.map((notificationType) => ({
    name: notificationType as NotificationTypeEnum
  }))

  return await prisma.notificationType.createMany({ data: notificationTypeData })
}
