import OriginalContents from "@/components/custom/original-contents/my-original-contents"
import { auth } from "@/lib/auth"
import { getMinterByUserId } from "@/lib/query/minters/getMinterByUserId"
import { redirect } from "next/navigation"

export default async function OriginalContentsPage() {
  const session = await auth()

  if (!session?.user.id || !session.user.email) {
    redirect("/login")

    return null
  }

  const currentUser = await getMinterByUserId(session.user.id)

  if (!currentUser?.minterId) {
    redirect("/")

    return null
  }

  return <OriginalContents minterId={currentUser.minterId} />
}
