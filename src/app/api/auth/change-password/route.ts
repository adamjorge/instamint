import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import {
  changePassword,
  changePasswordQuery,
  isLegit
} from "@/lib/query/server/users/changePassword"
import { findChangePasswordQuery } from "@/lib/query/server/users/findChangePasswordQuery"
import { StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

export const POST = withErrorHandling(handlePost)

export const PATCH = withErrorHandling(handlePatch)

async function handleGet(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get("token")

  if (!token) {
    return Response.json({ message: "Missing token" }, { status: StatusCodes.BAD_REQUEST })
  }

  const resetQuery = await findChangePasswordQuery(token)

  if (!resetQuery) {
    return Response.json({ message: "Invalid token" }, { status: StatusCodes.NOT_FOUND })
  }

  return Response.json({ message: "Valid token" }, { status: StatusCodes.OK })
}

async function handlePost(req: Request) {
  const { email, locale } = (await req.json()) as PostPayload

  if (!email || !locale) {
    return Response.json(
      { message: `Missing ${email ? "locale" : "email"}` },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  await changePasswordQuery(email, locale)

  return Response.json({ message: "Reset password email sent" }, { status: StatusCodes.CREATED })
}

async function handlePatch(req: Request) {
  const { token, currentPassword, newPassword } = (await req.json()) as PatchPayload

  if (!token || !currentPassword || !newPassword) {
    return Response.json(
      {
        message: "Missing at least one body parameter"
      },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  const userId = await isLegit(token, currentPassword)

  await changePassword(token, userId, newPassword)

  return Response.json({ message: "Password changed" }, { status: StatusCodes.OK })
}

type PostPayload = {
  email: string
  locale: string
}

type PatchPayload = {
  token: string
  currentPassword: string
  newPassword: string
}
