import { expect, test } from "@playwright/test"
import dotenv from "dotenv"

dotenv.config()

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  throw new Error("Please provide ADMIN_EMAIL and ADMIN_PASSWORD in .env file")
}

const userAdmin = { email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD }

test("connection and deconnection works as expected", async ({ browser }) => {
  // Don't remove the next two lines because it simulates incognito mode
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto("http://localhost:3000")

  await expect(page).toHaveTitle(/Instamint/u)

  await page.fill("input[name=email]", userAdmin.email)
  await page.fill("input[name=password]", userAdmin.password)

  await page.click("button[type=submit]")

  await page.waitForURL("http://localhost:3000/en")

  await expect(page.getByText("Sign out")).toBeVisible()

  await page.click("button[type=button]")

  await expect(page).toHaveTitle(/Instamint/u)
})
