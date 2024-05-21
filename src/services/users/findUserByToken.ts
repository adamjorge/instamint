import prisma from "@/lib/db"

export async function findUserByToken(token: string) {
  const user = await prisma.user.findFirst({
    where: { passwordResetToken: token }
  })

  if (!user) {
    throw new Error("User not found or invalid token")
  }

  if (!user.email) {
    throw new Error("User email is null or undefined")
  }

  return user
}
