import { SignIn } from "@/components/sign-in"
import { auth } from "@/lib/auth"

export default async function Page() {
  const session = await auth()
  console.log("SESSION IS", session)

  return (
    <div>
      {session?.user ? <h1>Logged in</h1> : null}
      <h1>Login</h1>
      <SignIn />
    </div>
  )
}
