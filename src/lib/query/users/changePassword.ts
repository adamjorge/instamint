import prisma from "@/lib/db"
import { generateChangeToken } from "@/lib/utils/change-password/generateChangeToken"
import { comparePassword, generatePasswordHash } from "@/lib/utils/change-password/password"
import { sendChangePasswordEmail } from "@/lib/utils/change-password/sendChangePasswordEmail"

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

  const changeToken = generateChangeToken()

  try {
    await sendChangePasswordEmail(user.email, changeToken, locale)
  } catch (error) {
    throw new Error("Error sending email")
  }

  const expiresAt = new Date()
  expiresAt.setMinutes(expiresAt.getMinutes() + 5)

  return await prisma.changePassword.create({
    data: {
      createdAt: new Date(),
      expires: expiresAt,
      token: changeToken,
      userId: user.id
    }
  })
}

export async function isLegit(token: string, currentPassword: string) {
  const changeQuery = await prisma.changePassword.findFirst({
    include: {
      user: true
    },
    where: {
      token,
      expires: {
        gte: new Date()
      },
      usedAt: null
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

export async function changePassword(token: string, userId: string, newPassword: string) {
  const hash = await generatePasswordHash(newPassword)

  await prisma.changePassword.update({
    where: {
      token
    },
    data: {
      usedAt: new Date()
    }
  })

  return await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      password: hash
    }
  })
}
