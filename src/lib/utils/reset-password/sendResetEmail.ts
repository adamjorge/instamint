import { getLocale } from "next-intl/server"
import nodemailer from "nodemailer"

export async function sendResetEmail(email: string, token: string) {
  if (!process.env.SMTP_SERVICE || !process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    throw new Error("SMTP environment variables are missing.")
  }

  if (!process.env.BASE_URL) {
    throw new Error("BASE_URL environment variable is missing.")
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
    subject: "Reset your password",
    html: `
      <p>Click the link below to reset your password:</p>
      <a href="${url}/${locale}/reset-password?token=${token}">Reset Password</a>
    `
  }

  await transporter.sendMail(emailData)
}
