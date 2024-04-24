import SignInForm from "@/components/sign-in-form"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await auth()

  if (session?.user) {
    redirect("/en")
  }

  return (
    <div>
      <SignInForm />
    </div>
  )
}
