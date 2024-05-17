import prisma from "@/lib/db"
import { generateResetToken } from "@/lib/utils/change-password/generateResetToken"
import { comparePassword, generatePasswordHash } from "@/lib/utils/change-password/password"
import { sendResetPasswordEmail } from "@/lib/utils/change-password/sendResetPasswordEmail"

export async function changePasswordQuery(email: string, locale: string) {
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

  return await prisma.passwordChange.create({
    data: {
      createdAt: new Date(),
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      token: resetToken,
      userId: user.id
    }
  })
}

export async function isLegit(token: string, currentPassword: string) {
  const changeQuery = await prisma.passwordChange.findFirst({
    include: {
      user: true
    },
    where: {
      token
    }
  })

  if (!changeQuery?.user.password) {
    throw new Error("User not found")
  }

  const passwordMatch = await comparePassword(currentPassword, changeQuery.user.password)

  if (!passwordMatch) {
    throw new Error("Current password does not match")
  }

  return changeQuery.userId
}

export async function changePassword(userId: string, newPassword: string) {
  const hash = await generatePasswordHash(newPassword)

  return await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      password: hash
    }
  })
}
