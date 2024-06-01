import ImageUploadForm from "@/components/custom/upload-original-content/upload-form"
import { auth } from "@/lib/auth"
import { getMinterByUserId } from "@/lib/query/minters/getMinterByUserId"
import { redirect } from "next/navigation"

export default async function UploadOriginalContentPage() {
  const session = await auth()

  if (!session?.user.id || !session.user.email) {
    redirect("/")

    return null
  }

  const currentUser = await getMinterByUserId(session.user.id)

  if (!currentUser?.minterId) {
    redirect("/")

    return null
  }

  return <ImageUploadForm minterId={currentUser.minterId.toString()} />
}
