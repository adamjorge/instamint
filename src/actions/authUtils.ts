"use server"

import prisma from "@/lib/db"
import { z } from "zod"
import { AuthError } from "next-auth"
import { EmailNotVerifiedError } from "@/errors"
import { generateEmailVerificationToken, sendVerificationEmail } from "./emailUtils"
import { findUserByEmail, generatePasswordHash } from "./dbUtils"
import { isUsersEmailVerified } from "./verificationUtils"
import { redirect } from "next/navigation"

const db = prisma

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await isUsersEmailVerified(formData.get("email") as string)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials."

        default:
          return "Something went wrong."
      }
    }

    if (error instanceof EmailNotVerifiedError) {
      return error.message
    }

    throw error
  }

  return "Something went wrong."
}

const signUpSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(3).max(255)
})

interface SignUpFormState {
  errors: {
    name?: string[]
    email?: string[]
    password?: string[]
    _form?: string[]
  }
}

interface SignUpFormData {
  email: string
  password: string
  name: string
}

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
    await db.user.create({
      data: {
        name: formData.name,
        email: formData.email,
        password: hashed,
        emailVerifToken: verificationToken
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

  redirect(`/email/verify/send?email=${formData.email}&verification_sent=1`)

  return { errors: {} }
}
