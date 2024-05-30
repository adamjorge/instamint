import ProfileChanges from "@/components/custom/profile/profile-changes"
import { auth } from "@/lib/auth"
import { getMinterByUserId } from "@/lib/query/minters/getMinterByUserId"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user.id || !session.user.email) {
    redirect("/")
  }

  const currentUser = await getMinterByUserId(session.user.id)

  if (!currentUser?.minterId) {
    redirect("/")
  }

  const profileChangesProps = {
    userId: session.user.id,
    minterId: currentUser.minterId,
    email: session.user.email
  }

  return <ProfileChanges {...profileChangesProps} />
}
