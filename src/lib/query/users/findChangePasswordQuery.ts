import prisma from "@/lib/db"

export async function findChangePasswordQuery(token: string) {
  return await prisma.passwordChange.findFirst({
    where: {
      token,
      expires: {
        gte: new Date()
      },
      usedAt: null
    }
  })
}
