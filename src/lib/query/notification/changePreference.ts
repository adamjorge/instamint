import prisma from "@/lib/db"
import { NotificationTypeEnum } from "@prisma/client"

export async function changePreference(minterId: string, type: NotificationTypeEnum) {
  const minterIdNumber = parseInt(minterId, 10)
  const currentPreference = await prisma.notificationPreference.findUnique({
    where: {
      notificationPreferenceId: {
        minterId: minterIdNumber,
        type
      }
    },
    select: {
      isEnabled: true
    }
  })

  if (!currentPreference) {
    return await prisma.notificationPreference.create({
      data: {
        minterId: minterIdNumber,
        type,
        isEnabled: true
      }
    })
  }

  return await prisma.notificationPreference.update({
    where: {
      notificationPreferenceId: {
        minterId: minterIdNumber,
        type
      }
    },
    data: {
      isEnabled: !currentPreference.isEnabled
    }
  })
}
