"use server"

import { redirect } from "@/config/i18n/locales"
import prisma from "@/lib/db"
import { findUserByEmail, generatePasswordHash } from "@/lib/utils/db"
import { generateEmailVerificationToken, sendVerificationEmail } from "@/lib/utils/email"
import { initNotificationPreferences } from "@/lib/utils/initNotificationPreferences"
import { signUpSchema } from "@/validators/schemas/signUpSchema"
import { faker } from "@faker-js/faker"

export async function signUp(formData: SignUpFormData): Promise<SignUpFormState> {
  const result = signUpSchema.safeParse(formData)

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  const isEmailExists = await findUserByEmail(formData.email)

  if (isEmailExists) {
    return {
      errors: {
        email: ["Email already exists"]
      }
    }
  }

  const hashed = await generatePasswordHash(formData.password)
  const verificationToken = await generateEmailVerificationToken()

  try {
    const minter = await prisma.minter.create({
      data: {
        username: faker.internet.userName(),
        profileUrl: faker.image.urlLoremFlickr(),
        avatarKey: faker.image.avatar(),
        bio: faker.lorem.paragraph()
      }
    })
    await initNotificationPreferences(minter.id)
    await prisma.user.create({
      data: {
        name: formData.name,
        email: formData.email,
        password: hashed,
        emailVerifyToken: verificationToken,
        minterId: minter.id
      }
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    }
  }

  await sendVerificationEmail(formData.email, verificationToken)

  redirect(`/email?email=${formData.email}&verification_sent=true`)

  return { errors: {} }
}

type SignUpFormState = {
  errors: {
    name?: string[]
    email?: string[]
    password?: string[]
    _form?: string[]
  }
}

type SignUpFormData = {
  email: string
  password: string
  name: string
}
