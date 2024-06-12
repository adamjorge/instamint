"use client"

import { findUserByEmail } from "@/lib/utils/db"
import { verifyEmail } from "@/lib/utils/email"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function useEmailVerification() {
  const t = useTranslations("signUp")
  const g = useTranslations("global")
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
        setResult(t("successVerification"))
      } catch (error) {
        setErrorMessage(g("error"))
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
      setErrorMessage(g("error"))
      setIsLoading(false)
    })
  }, [userEmail, token, t, g])

  return { isLoading, result, errorMessage }
}
