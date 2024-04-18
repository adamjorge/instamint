"use client"

import { findUserByEmail, verifyEmail } from "@/actions/auth"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Form from "./send/form"

export default function VerifyEmail() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")
  const token = searchParams.get("token")
  const [isLoading, setIsLoading] = useState(true)
  const [result, setResult] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    emailVerification()
      .then(() => {
        setResult("Email verified successfully. Please relogin.")
      })
      .catch(() => {
        setErrorMessage("A verification link has been sent to your email, please verify your email")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [email, token])

  const emailVerification = async (): Promise<void> => {
    if (!email || !token) {
      throw new Error("Missing required fields")
    }

    const user = await findUserByEmail(email)

    if (!user) {
      throw new Error("Invalid verification token")
    }

    if (token !== user.emailVerifToken) {
      throw new Error("Invalid verification token")
    }

    await verifyEmail(user.email)
  }

  return (
    <>
      <div className="mb-4">{isLoading ? <Form /> : errorMessage || result}</div>
      <div className="my-3">
        <Link href="/login" className="bg-white py-3 px-2 rounded">
          Back to Login
        </Link>
      </div>
    </>
  )
}
