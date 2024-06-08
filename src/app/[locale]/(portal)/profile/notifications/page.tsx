import NotificationPreferences from "@/components/custom/profile/notifications/notification-preferences"
import { auth } from "@/lib/auth"
import { getMinterByUserId } from "@/lib/query/minters/getMinterByUserId"
import { redirect } from "next/navigation"

export default async function NotificationPage() {
  const session = await auth()

  if (!session?.user.id) {
    redirect("/")
  }

  const currentUser = await getMinterByUserId(session.user.id)

  if (!currentUser?.minterId) {
    redirect("/")
  }

  const notificationPreferencesProps = {
    minterId: currentUser.minterId
  }

  return <NotificationPreferences {...notificationPreferencesProps} />
}
