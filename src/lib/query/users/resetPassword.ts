import prisma from "@/lib/db"
import { generateResetToken } from "@/lib/utils/reset-password/generateResetToken"
import { sendResetPasswordEmail } from "@/lib/utils/reset-password/sendResetPasswordEmail"

export async function resetPasswordQuery(email: string, locale: string) {
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })

  if (!user) {
    throw new Error("User not found")
  }

  if (!user.email) {
    throw new Error("Authentification without email is not supported yet")
  }

  const resetToken = generateResetToken()

  try {
    await sendResetPasswordEmail(user.email, resetToken, locale)
  } catch (error) {
    throw new Error("Error sending email")
  }

  return await prisma.passwordReset.create({
    data: {
      createdAt: new Date(),
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      token: resetToken,
      userId: user.id
    }
  })
}
