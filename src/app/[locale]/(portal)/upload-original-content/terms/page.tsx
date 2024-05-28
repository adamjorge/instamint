import UploadTerms from "@/components/custom/upload-original-content/terms/terms"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Terms() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return <UploadTerms />
}
