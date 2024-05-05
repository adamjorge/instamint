"use server"

import prisma from "@/lib/db"
import bcryptjs from "bcryptjs"

export const findUserByEmail = async (email: string) =>
  await prisma.user.findFirst({
    where: {
      email
    }
  })

export const generatePasswordHash = async (password: string) => {
  const salt = await bcryptjs.genSalt(10)

  return bcryptjs.hash(password, salt)
}
