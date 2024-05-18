"use server"

import { randomBytes } from "crypto"
import { getLocale } from "next-intl/server"
import nodemailer from "nodemailer"

export const generateResetToken = () =>
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

export const sendResetEmail = async (email: string, token: string) => {
  const requiredEnvVariables = ["SMTP_SERVICE", "SMTP_EMAIL", "SMTP_PASSWORD"]
  for (const envVar of requiredEnvVariables) {
    if (!process.env[envVar]) {
      throw new Error(`Environment variable ${envVar} is missing.`)
    }
  }
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  })
  const locale = await getLocale()
  const url = process.env.BASE_URL || "http://localhost:3000"
  const emailData = {
    from: '"Instamint" <instamint.deva.noreply@gmail.com>',
    to: email,
    subject: "Password Reset",
    html: `
      <p>You have requested to reset your password. This token will expire in 60 minutes (1 hour). Please use the link below to reset your password:</p>
      <a href="${url}/${locale}/update-password?token=${token}">Reset Password</a>
      <p>Best Regards,</p>
      <p>Instamint</p>
      
    `
  }

  await transporter.sendMail(emailData)
}
