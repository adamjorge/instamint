"use client"

import SignUpFormLogic from "@/components/custom/signup/sign-up-form-logic"

export default function SignUpForm() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignUpFormLogic />
    </main>
  )
}
