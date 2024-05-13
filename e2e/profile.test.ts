import { expect, test } from "@playwright/test"
import dotenv from "dotenv"

dotenv.config()

if (!process.env.NOTADMIN_EMAIL || !process.env.NOTADMIN_PASSWORD) {
  throw new Error("Please provide NOTADMIN_EMAIL and NOTADMIN_PASSWORD in .env file")
}

const user = { email: process.env.NOTADMIN_EMAIL, password: process.env.NOTADMIN_PASSWORD }
const howTo = ["How to use Instamint", "Notifications"]
const privacy = ["Who can see my profile?", "Privacy"]
const application = ["Your application", "Language"]

test("profile view is accessible as expected", async ({ browser }) => {
  // Don't remove the next two lines because it simulates incognito mode
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto("http://localhost:3000")

  await expect(page).toHaveTitle(/Instamint/u)

  await page.fill("input[name=email]", user.email)
  await page.fill("input[name=password]", user.password)

  await page.getByLabel("sign in").click()

  await page.getByLabel("profile").click()

  await page.waitForURL("**/profile/changes")

  const visiblePromises = []
  for (const item of howTo) {
    const visiblePromise = expect(page.getByText(item)).toBeVisible()
    visiblePromises.push(visiblePromise)
  }
  for (const item of privacy) {
    const visiblePromise = expect(page.getByText(item)).toBeVisible()
    visiblePromises.push(visiblePromise)
  }
  for (const item of application) {
    const visiblePromise = expect(page.getByText(item)).toBeVisible()
    visiblePromises.push(visiblePromise)
  }
  await Promise.all(visiblePromises)

  await page.getByLabel("sign out").click()

  await expect(page).toHaveTitle(/Instamint/u)
})
