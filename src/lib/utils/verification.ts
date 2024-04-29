"use server"

import { EmailNotVerifiedError } from "@/errors"
import db from "@/lib/db"

export const isUsersEmailVerified = async (email: string) => {
  const user = await db.user.findFirst({ where: { email } })

  if (!user || !user.emailVerified) {
    throw new EmailNotVerifiedError(`EMAIL_NOT_VERIFIED:${email}`)
  }

  return true
}
