"use server"

import prisma from "@/lib/db"
import bcryptjs from "bcryptjs"

const db = prisma

export const findUserByEmail = async (email: string) =>
  await db.user.findFirst({
    where: {
      email
    }
  })

export const generatePasswordHash = async (password: string) => {
  const salt = await bcryptjs.genSalt(10)

  return bcryptjs.hash(password, salt)
}
