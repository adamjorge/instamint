import SearchView from "@/components/custom/search/search-view"
import { auth } from "@/lib/auth"
import { getMinterByUserId } from "@/lib/query/server/minters/getMinterByUserId"
import { redirect } from "next/navigation"

export default async function SearchPage() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  const currentUser = await getMinterByUserId(session.user.id)

  if (!currentUser?.minterId) {
    redirect("/")
  }

  const searchProps = {
    minterId: currentUser.minterId
  }

  return <SearchView {...searchProps} />
}
