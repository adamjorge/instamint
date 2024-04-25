import SignInCard from "@/components/custom/sign-in/sign-in-card"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await auth()

  if (session?.user) {
    redirect("/en")
  }

  return <SignInCard />
}
