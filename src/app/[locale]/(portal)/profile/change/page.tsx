import ProfileChanges from "@/components/custom/profile/profile-changes"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user.id) {
    redirect("/")
  }

  return <ProfileChanges userId={session.user.id} />
}
