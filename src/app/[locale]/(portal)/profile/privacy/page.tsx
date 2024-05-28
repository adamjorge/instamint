import ProfilePrivacy from "@/components/custom/profile/profile-privacy"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function PrivacyPage() {
  const session = await auth()

  if (!session?.user.id) {
    redirect("/login")
  }

  return <ProfilePrivacy userId={session.user.id} />
}
