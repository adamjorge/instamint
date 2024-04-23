"use server"

import nodemailer from "nodemailer"
import { randomBytes } from "crypto"
import db from "@/lib/db"

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
  const requiredEnvVariables = ["MAIL_HOST", "MAIL_PORT", "MAIL_USERNAME", "MAIL_PASSWORD"]
  for (const envVar of requiredEnvVariables) {
    if (!process.env[envVar]) {
      throw new Error(`Environment variable ${envVar} is missing.`)
    }
  }

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })
  const emailData = {
    from: '"Instamint, your social network for minting NFTs" <instamint.deva.noreply@gmail.com>',
    to: email,
    subject: "Account creation email verification",
    html: `
      <p>Click the link below to verify your email:</p>
      <a href="http://localhost:3000/email/verify?email=${email}&token=${token}">Verify Email</a>
    `
  }

  await transporter.sendMail(emailData)
}

export const resendVerificationEmail = async (email: string) => {
  try {
    const emailVerificationToken = await generateEmailVerificationToken()

    await db.user.update({
      where: { email },
      data: { emailVerifToken: emailVerificationToken }
    })

    await sendVerificationEmail(email, emailVerificationToken)
  } catch (error) {
    return "Something went wrong."
  }

  return "Email verification sent."
}

export const verifyEmail = (email: string) =>
  db.user.update({
    where: { email },
    data: {
      emailVerifiedAt: new Date(),
      emailVerifToken: null
    }
  })
