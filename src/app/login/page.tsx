import SignInForm from "@/components/sign-in-form"
// Import { auth } from "@/lib/auth"

export default function Page() {
  // Const session = await auth()

  return (
    <div>
      {/* {session?.user ? <h1>Logged in</h1> : null}
      <h1>Login</h1> */}
      <SignInForm />
    </div>
  )
}
