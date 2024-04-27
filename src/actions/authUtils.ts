"use server"

import prisma from "@/lib/db"
import { z } from "zod"
import { generateEmailVerificationToken, sendVerificationEmail } from "./emailUtils"
import { findUserByEmail, generatePasswordHash } from "./dbUtils"
import { redirect } from "next/navigation"

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
    await prisma.user.create({
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

  redirect(`/auth/email/verify?email=${formData.email}&verification_sent=1`)

  return { errors: {} }
}
