import prisma from "@/lib/db"
import { NotificationTypeEnum } from "@prisma/client"

export async function addNotification(
  minterId: string,
  notificationType: NotificationTypeEnum,
  description: string
) {
  const minterIdNumber = parseInt(minterId, 10)

  return await prisma.notification.create({
    data: {
      minterId: minterIdNumber,
      type: notificationType,
      description
    }
  })
}

export async function deleteNotification(notificationId: string) {
  return await prisma.notification.delete({
    where: {
      id: notificationId
    }
  })
}
