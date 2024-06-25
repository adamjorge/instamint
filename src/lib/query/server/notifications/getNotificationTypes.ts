import prisma from "@/lib/db"

export async function getNotificationTypes() {
  return await prisma.notificationType.findMany()
}
