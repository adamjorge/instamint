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
    const emailVerification = async (email: string) => {
      if (!email || !token) {
        setErrorMessage("Missing required fields")

        return
      }

      try {
        const user = await findUserByEmail(email)

        if (!user || token !== user.emailVerifyToken) {
          setErrorMessage("Invalid verification token")

          return
        }

        await verifyEmail(email)
        setResult("Email verified successfully. Please login.")
      } catch (error) {
        setErrorMessage("Error occurred")
      } finally {
        setIsLoading(false)
      }
    }
    const verify = async () => {
      if (userEmail && token) {
        await emailVerification(userEmail)
      } else {
        setIsLoading(false)
      }
    }

    verify().catch(() => {
      setErrorMessage("Error occurred")
      setIsLoading(false)
    })
  }, [userEmail, token])

  return { isLoading, result, errorMessage }
}
