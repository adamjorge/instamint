"use client"

import { findUserByEmail } from "@/lib/utils/db"
import { verifyEmail } from "@/lib/utils/email"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function useEmailVerification() {
  const searchParams = useSearchParams()
  const userEmail = searchParams.get("email")
  const token = searchParams.get("token")
  const [isLoading, setIsLoading] = useState(true)
  const [result, setResult] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const emailVerification = async (email: string): Promise<void> => {
      if (!email || !token) {
        throw new Error("Missing required fields")
      }

      const user = await findUserByEmail(email)

      if (!user) {
        throw new Error("Invalid verification token")
      }

      if (token !== user.emailVerifyToken) {
        throw new Error("Invalid verification token")
      }

      await verifyEmail(email)
    }

    if (userEmail && token) {
      emailVerification(userEmail)
        .then(() => {
          setResult("Email verified successfully. Please login.")
        })
        .catch(() => {
          setErrorMessage("Error occured")
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [userEmail, token])

  return { isLoading, result, errorMessage }
}
