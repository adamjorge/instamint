"use server"

import prisma from "@/lib/db"
import { findUserByEmail } from "@/lib/utils/db"
import { generateResetToken, sendResetEmail } from "@/lib/utils/reset-password/sendEmail"

export const requestPasswordReset = async (email: string) => {
  try {
    const user = await findUserByEmail(email)

    if (!user) {
      throw new Error("User with this email does not exist.")
    }

    const token = await generateResetToken()

    await prisma.user.update({
      where: { email },
      data: {
        passwordResetToken: token,
        passwordResetTokenExpires: new Date(Date.now() + 3600000)
      }
    })

    await sendResetEmail(email, token)

    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
