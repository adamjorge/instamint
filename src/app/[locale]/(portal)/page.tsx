import Feed from "@/components/custom/feed/feed"
import { auth } from "@/lib/auth"
import { getMinterByUserId } from "@/lib/query/minters/getMinterByUserId"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  const currentUser = await getMinterByUserId(session.user.id)

  if (!currentUser?.minter) {
    redirect("/login")
  }

  const minterId = currentUser.minter.id

  return <Feed minterId={minterId} />
}
