import prisma from "@/lib/db"
import { NotificationTypeEnum } from "@prisma/client"

export async function addNotification(minterId: string, notificationType: NotificationTypeEnum) {
  const minterIdNumber = parseInt(minterId, 10)

  return await prisma.notification.create({
    data: {
      minterId: minterIdNumber,
      type: notificationType
    }
  })
}

export async function deleteNotification(minterId: string, notificationType: NotificationTypeEnum) {
  const minterIdNumber = parseInt(minterId, 10)

  return await prisma.notification.delete({
    where: {
      notificationId: {
        minterId: minterIdNumber,
        type: notificationType
      }
    }
  })
}
