import SearchView from "@/components/custom/search/search-view"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function SearchPage() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return <SearchView session={session} />
}
