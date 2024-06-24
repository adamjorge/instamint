"use server"

import prisma from "@/lib/db"
import { randomBytes } from "crypto"
import { getLocale, getTranslations } from "next-intl/server"
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
  const t = await getTranslations({ locale })
  const url = process.env.BASE_URL || "http://localhost:3000"
  const emailData = {
    from: `${t("global.appDescription")} <instamint.deva.noreply@gmail.com>`,
    to: email,
    subject: t("signUp.signupSubjectTitle"),
    html: `
      <p>${t("signUp.signupInstruction")}</p>
      <a href="${url}/${locale}/email?email=${email}&token=${token}">${t("signUp.signupVerifyTitle")}</a>
      <p>${t("global.greeting")},</p>
      <p>Instamint</p>
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
