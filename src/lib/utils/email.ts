"use server"

import prisma from "@/lib/db"
import { randomBytes } from "crypto"
import { getLocale } from "next-intl/server"
import nodemailer from "nodemailer"

export const generateEmailVerificationToken = () =>
  new Promise<string>((resolve, reject) => {
    try {
      const token = randomBytes(32).toString("hex")
      resolve(token)
    } catch (error) {
      if (error instanceof Error) {
        reject(error)
      } else {
        reject(new Error("Unknown error occurred"))
      }
    }
  })

export const sendVerificationEmail = async (email: string, token: string) => {
  const requiredEnvVariables = ["SMTP_SERVICE", "SMTP_EMAIL", "SMTP_PASSWORD"]
  for (const envVar of requiredEnvVariables) {
    if (!process.env[envVar]) {
      throw new Error(`Environment variable ${envVar} is missing.`)
    }
  }

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  })
  const locale = await getLocale()
  const url = process.env.BASE_URL || "http://localhost:3000"
  const emailData = {
    from: '"Instamint, your social network for minting NFTs" <instamint.deva.noreply@gmail.com>',
    to: email,
    subject: "Account creation email verification",
    html: `
      <p>Click the link below to verify your email:</p>
      <a href="${url}/${locale}/email/verify?email=${email}&token=${token}">Verify Email</a>
    `
  }

  await transporter.sendMail(emailData)
}

export const verifyEmail = (email: string) =>
  prisma.user.update({
    where: { email },
    data: {
      emailVerified: new Date(),
      emailVerifyToken: null
    }
  })
