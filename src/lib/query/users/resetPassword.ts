import prisma from "@/lib/db"
import { generateResetToken } from "@/lib/utils/reset-password/generateResetToken"

export async function resetPasswordQuery(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })

  if (!user) {
    throw new Error("User not found")
  }

  const resetToken = generateResetToken()

  return await prisma.passwordReset.create({
    data: {
      createdAt: new Date(),
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      token: resetToken,
      userId: user.id
    }
  })
}
