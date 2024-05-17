import prisma from "@/lib/db"
import { generatePasswordHash } from "@/lib/utils/db"
import { ReasonPhrases, StatusCodes } from "http-status-codes"
import { NextResponse } from "next/server"
import { z } from "zod"

const updatePasswordSchema = z.object({
  newPassword: z.string().min(6).max(255),
  confirmPassword: z.string().min(6).max(255)
})

interface UpdatePasswordFormState {
  errors: {
    newPassword?: string[]
    confirmPassword?: string[]
    _form?: string[]
  }
}

interface UpdatePasswordFormData {
  newPassword: string
  confirmPassword: string
}

interface RequestBody {
  token: string
  formData: UpdatePasswordFormData
}

function validateFormData(formData: UpdatePasswordFormData) {
  const result = updatePasswordSchema.safeParse(formData)

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  if (formData.newPassword !== formData.confirmPassword) {
    return {
      errors: {
        confirmPassword: ["New Password and confirm password must match"]
      }
    }
  }

  return { errors: {} }
}

async function findUserByToken(token: string) {
  const user = await prisma.user.findFirst({
    where: { passwordResetToken: token }
  })

  if (!user) {
    throw new Error("User not found or invalid token")
  }

  if (!user.email) {
    throw new Error("User email is null or undefined")
  }

  return user
}

async function updateUserPassword(email: string, hashedPassword: string) {
  await prisma.user.update({
    where: { email },
    data: {
      password: hashedPassword,
      passwordResetToken: null,
      passwordResetTokenExpires: null
    }
  })
}

export async function updatePassword(
  token: string,
  formData: UpdatePasswordFormData
): Promise<UpdatePasswordFormState> {
  try {
    const validation = validateFormData(formData)

    if (Object.keys(validation.errors).length > 0) {
      return validation
    }

    const hashedPassword = await generatePasswordHash(formData.newPassword)
    const user = await findUserByToken(token)

    if (!user.email) {
      return {
        errors: {
          _form: ["User email is null or undefined"]
        }
      }
    }

    await updateUserPassword(user.email, hashedPassword)

    return { errors: {} }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    }

    return {
      errors: {
        _form: ["An unknown error occurred"]
      }
    }
  }
}

export async function POST(req: Request) {
  try {
    const { token, formData } = (await req.json()) as RequestBody
    const response = await updatePassword(token, formData)

    if (Object.keys(response.errors).length > 0) {
      return NextResponse.json(response, { status: StatusCodes.BAD_REQUEST })
    }

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: StatusCodes.OK }
    )
  } catch (error) {
    return NextResponse.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
