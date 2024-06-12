import prisma from "@/lib/db"

export async function updateUserPassword(email: string, hashedPassword: string) {
  await prisma.user.update({
    where: { email },
    data: {
      password: hashedPassword,
      passwordResetToken: null,
      passwordResetTokenExpires: null
    }
  })
}
