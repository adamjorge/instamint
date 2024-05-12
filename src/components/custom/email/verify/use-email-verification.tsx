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
        setErrorMessage("Missing required fields")

        return
      }

      const user = await findUserByEmail(email)

      if (!user || token !== user.emailVerifyToken) {
        setErrorMessage("Invalid verification token")

        return
      }

      await verifyEmail(email)
      setResult("Email verified successfully. Please login.")
    }

    if (userEmail && token) {
      emailVerification(userEmail)
        .catch(() => {
          setErrorMessage("Error occurred")
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [userEmail, token])

  return { isLoading, result, errorMessage }
}
