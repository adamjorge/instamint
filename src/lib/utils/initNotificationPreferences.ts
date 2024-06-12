import prisma from "@/lib/db"

export async function initNotificationPreferences(minterId: number) {
  const notificationPreferencesTypes = await prisma.notificationType.findMany()
  const initUserPreferences = notificationPreferencesTypes.map((type) => ({
    minterId,
    type: type.name
  }))
  await prisma.notificationPreference.createMany({
    data: initUserPreferences
  })
}
