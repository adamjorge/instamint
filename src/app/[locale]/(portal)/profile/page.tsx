import ProfileView from "@/components/custom/profile/profile-view"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user.id) {
    redirect("/")
  }

  return <ProfileView userId={session.user.id} />
}
