import { getTranslations } from "next-intl/server"
import nodemailer from "nodemailer"

export async function sendResetPasswordEmail(email: string, token: string, locale: string) {
  if (!process.env.SMTP_SERVICE || !process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    throw new Error("SMTP environment variables are missing.")
  }

  if (!process.env.BASE_URL) {
    throw new Error("BASE_URL environment variable is missing.")
  }

  const t = await getTranslations({ locale })
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  })
  const url = process.env.BASE_URL || "http://localhost:3000"
  const emailData = {
    from: `${t("changePassword.appDescription")} <instamint.deva.noreply@gmail.com>`,
    to: email,
    subject: t("changePassword.changePasswordTitle"),
    html: `
      <p>${t("changePassword.changePasswordInstructions")}</p>
      <a href="${url}/${locale}/change-password?token=${token}">${t("changePassword.changePassword")}</a>
    `
  }

  await transporter.sendMail(emailData)
}
