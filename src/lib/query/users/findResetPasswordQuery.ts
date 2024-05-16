import prisma from "@/lib/db"

export async function findResetPasswordQuery(token: string) {
  return await prisma.passwordReset.findFirst({
    where: {
      token
    }
  })
}
