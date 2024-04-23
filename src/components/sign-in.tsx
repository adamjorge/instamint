"use client"

import { signIn, signOut } from "next-auth/react"

export function SignIn() {
  return (
    <>
      <button onClick={() => signIn("credentials")}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}
